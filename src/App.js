import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Navigation from './components/navigation';

const App = function () {
	return (
		<div>
			<Navigation />
			<h1>Home</h1>
		</div>
	)
};
export default App