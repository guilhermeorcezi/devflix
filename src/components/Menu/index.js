import React from 'react';
import logo from '../../assets/img/logo.png';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
	return (
		<nav className="nav-menu">
			<Link to="/">
				<img src={logo} alt="Devflix" className="logo" />
			</Link>

			<Button as={Link} to="/cadastro/video">
				Novo vídeo
			</Button>
		</nav>
	);
}
