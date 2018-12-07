import React, { Component } from 'react';
import './App.css';

class App extends Component {

	componentDidMount() {
		const script = document.createElement("script");

		script.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
		script.async = true;
		script.onload = () => {
			var OneSignal = window.OneSignal || [];
			OneSignal.push(function() {
				OneSignal.init({
					appId: "6b3c1e5b-5d49-4ad9-9a74-1bb164e8b62a"
				});
			});
		}

		document.body.appendChild(script);
	}

  render() {
    return (
      <div className="App">
				<div className='onesignal-customlink-container'></div>
      </div>
    );
  }
}

export default App;
