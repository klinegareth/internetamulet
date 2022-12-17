import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "you are protected",
  "you are safe",
  "your community loves you",
  "you belong online"
];

const App = () => {
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() =>
		  setIndex(index => index + 1),
		  2000 // every 1 seconds
		);
		return () => clearTimeout(intervalId);
	  }, []);

	return (
		<div id="app-root">
			<img id="background-img" src="../images/tumblr_mmo0kcrYVU1sp2y00o1_500.gif"/>
			<div id="affirming-text">
				<h1>
				<TextTransition springConfig={presets.molasses}>
					{TEXTS[index % TEXTS.length]}
				</TextTransition>
				</h1>
			</div>
		</div>
	);
}

export default App;
