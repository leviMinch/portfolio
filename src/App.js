import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Navigation from './components/navigation';
import { BrowserRouter as Router } from 'react-router-dom';

const App = function () {
	return (
		<div>
			<Router>
				<Navigation />
			</Router>
			<h1>Home</h1>
		</div>
	)
};
export default App