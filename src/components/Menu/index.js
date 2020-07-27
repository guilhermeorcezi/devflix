import React from 'react';
import logo from '../../assets/img/logo.png';
import Button from '../Button';
import './Menu.css';

export default function Menu() {
	return (
		<nav className="nav-menu">
			<a href="/">
				<img src={logo} alt="Devflix" className="logo" />
			</a>

			<Button>Novo vídeo</Button>
		</nav>
	);
}
