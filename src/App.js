import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="App">
			<ToastContainer />
			<Routes />
		</div>
	);
}

export default App;
