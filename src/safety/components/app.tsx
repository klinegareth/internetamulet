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
				<ul>
					<li>
						<a id="lifeline" href={"https://translifeline.org/"} onClick={window.hide} rel="noopener noreferrer" target="blank">lifeline</a>
					</li>
					<li>
						<a id="history" href={"https://www.digitaltransgenderarchive.net/"} onClick={window.hide} rel="noopener noreferrer" target="blank">history</a>
					</li>
					<li>
						<a id="memes" href={"https://www.reddit.com/r/traaaaaaannnnnnnnnns/"} onClick={window.hide} rel="noopener noreferrer" target="blank">memes</a>
					</li>
				</ul>
			</div>
			<img id="background-img" src="../images/moon.gif"/>
		</div>
	);
}

export default App;
