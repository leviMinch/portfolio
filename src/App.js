import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

const App = function () {
	useEffect(() => {
		document.title = "Portfolio"
	  }, [])
	
	return (
		<div className = "h-full bg-cover bg-center min-h-screen">
			<title>Test</title>
			<Router>
				<Navbar />
				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</Router>
		</div>
	)
};
export default App