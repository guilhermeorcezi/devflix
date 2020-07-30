import React from 'react';
import './styles';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function DefaultPage({ children }) {
	return (
		<>
			<Menu />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}
