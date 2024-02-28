import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className='navbar'>
			<div className='navbar-toggle' onClick={toggleMenu}>
				<div className={`menu-icon ${isOpen ? 'open' : ''}`}>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</div>
			</div>
			<ul className={`Links ${isOpen ? 'open' : ''}`}>
				<li>
					<Link to='/' className='Link-individual'>
						Home
					</Link>
				</li>
				<li>
					<Link to='/Jobs' className='Link-individual'>
						Jobs
					</Link>
				</li>
				{/* <li>
					<Link to='/contact' className='Link-individual'>
						Contact
					</Link>
				</li>
				<li>
					<Link to='/resume' className='Link-individual'>
						Resume
					</Link>
				</li> */}
			</ul>
		</nav>
	);
};

export default NavBar;
