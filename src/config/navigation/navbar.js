import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const NavBar = () => {
	const navigate = useNavigate();

	const raw_data = useSelector(state => state.apiSlice)
	// console.log(JSON.stringify(raw_data?.data?.data?.category));
	const handleClick = () => {
		navigate(`/`);

    };
	return (
		<>
		{!raw_data?.loading &&(
			<>
			<nav className='bg-gray-800 text-white p-1 ps-5'>Email: voiceforchange@ruangmei.com</nav>
			<header className="w-full text-center mb-5">
				<h1 className="text-6xl font-bold text-gray-900 pt-5" onClick={handleClick}>Voice for Change</h1>
				<p className="text-lg text-gray-700 my-3 ">Empowering Voices, Inspiring Change</p>
				<nav className="flex justify-center space-x-8 py-3 text-lg font-medium text-gray-700">
				{raw_data?.data?.data?.category &&(
				<Link to={`/`} className="hover:text-blue-500">
				All
				</Link>
				// <a href='/' className="hover:text-blue-500">All</a>
				)}
				{raw_data?.data?.data?.category?.map((link) => (
					<Link key={link.slug} to={`/cat/${link.slug}`} className="hover:text-blue-500">
					{link.name}
					</Link>
				))}
				</nav>
			</header>
			</>
		)}
		</>

	);
};

export default NavBar;