import React from 'react';
import './Nav.css';

const Nav = () => {
	return (
		<div>
			<nav className="navbar navbar-light bg-transparent">
				<a href="/" className="navbar-brand">JOBS BOARD</a>
				<a href="/#categories" className="btn gradient">Categories</a>
			</nav>
		</div>
	)
}

export default Nav;