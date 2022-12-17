import React from "react";
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
		  2000 // every 1 seconds
		);
		return () => clearTimeout(intervalId);
	  }, []);

	return (
		<div id="app-root">
			<img id="background-img" src="../images/star-night-gifbig.gif"/>
			<div id="affirming-text">
				<Fade id="animated-text">
					<h1 key={index}>	
						{TEXTS[index % TEXTS.length]}
					</h1>
				</Fade>
			</div>
		</div>
	);
}

export default App;
