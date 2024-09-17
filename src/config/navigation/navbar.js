import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';


const NavBar = () => {
	return (
		<>
		<nav className='bg-gray-800 text-white p-1'>ENG - HIN</nav>
		<header className="w-full text-center mb-5">
			<h1 className="text-6xl font-bold text-gray-900 bg-red-400 pt-5">Voice for Change</h1>
			<p className="text-lg text-gray-700  bg-yellow-300">Empowering Voices, Inspiring Change</p>
			<nav className="flex justify-center space-x-8 py-3 text-lg font-medium bg-green-400 text-gray-700">
				<Link to="/articles" className="hover:text-blue-500">Articles</Link>
				<Link to="/poetry" className="hover:text-blue-500">Poetry</Link>
				<Link to="/arts" className="hover:text-blue-500">Arts & Photography</Link>
				<Link to="/opinion" className="hover:text-blue-500">Opinion</Link>
			</nav>
		</header>
		</>

	);
};

export default NavBar;