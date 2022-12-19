import React, {useState} from "react";

function setOverflowScroll() {
	document.documentElement.style.setProperty('--overflow-value', "scroll");
}

function App() {
	const [visible, setVisible] = useState(true);
	console.log("loaded!");
	window.scroll(0, 0);

	return(
		<div id="app-root" style={{display: visible ? 'block' : 'none'}}>
			<img id="background-img" src={browser.runtime.getURL("assets/images/sunset.gif")}/>
			<div id="container">
				<h1 id="title">This site has been flagged transphobic, proceed?</h1>
				<div id="button-container">
					<a id="safety" href={browser.runtime.getURL("assets/html/safety.html")}> Take me back to safety </a>
					<a id="proceed" onClick={() => {setVisible(!visible); setOverflowScroll();}}> I understand, and I want to proceed. </a>
				</div>
			</div>
		</div>
	);
};

export default App;
