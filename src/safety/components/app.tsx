import React, {useEffect} from "react";
import Fade from "react-reveal/Fade";

const TEXTS = [
  "you are protected",
  "you are safe",
  "you belong here"
];

const App = () => {
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() =>
		  setIndex(index => index + 1),
		  5000 // every 5 seconds
		);
		return () => clearTimeout(intervalId);
	  }, []);

	return (
		<div id="app-root">
			<div id="panel-container">
				<Fade id="animated-text">
					<h1 key={index}>	
						{TEXTS[index % TEXTS.length]}
					</h1>
				</Fade>
			</div>
			<img id="background-img" src="../images/moon.gif"/>
		</div>
	);
}

export default App;
