import React from 'react';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

function App() {
	return (
		<>
			<ToastContainer />
			<Routes />
		</>
	);
}

export default App;
