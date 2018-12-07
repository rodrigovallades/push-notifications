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
					appId: "8a7131ac-893b-4d80-b17d-74ee13cbe031",
					allowLocalhostAsSecureOrigin: true
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
