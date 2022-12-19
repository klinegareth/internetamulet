import React from "react";
import Fade from "react-reveal/Fade";

const TEXTS = [
  "you belong here",
  "you are protected",
  "you are safe"
];

const App = () => {
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() =>
		  setIndex(index => index + 1),
		  2000 // every 2 seconds
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
				<a id="safety-link" href={browser.extension.getURL("assets/html/safety.html")} onClick={window.close} target="_blank">click 4 safety</a>
			</div>
		</div>
	);
}

export default App;
