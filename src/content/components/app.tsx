import React, {useState} from "react";

function setOverflowScroll() {
	document.documentElement.style.setProperty('--overflow-value', "scroll");
}

function App() {
	const [visible, setVisible] = useState(true);

	return(
		<div id="app-root" style={{display: visible ? 'block' : 'none'}}>
			<img id="warning-image" src={browser.runtime.getURL("assets/images/logo.webp")} />
			<button id="safety" onClick={() => {window.location.assign(browser.runtime.getURL("assets/html/safety.html"))}}> Take me back to safety </button>
			<button id="proceed" onClick={() => {setVisible(!visible); setOverflowScroll();}}> I understand, and I want to proceed. </button>
			<img id="warning-image" src={browser.runtime.getURL("assets/images/logo.webp")} />
		</div>
	);
};

export default App;
