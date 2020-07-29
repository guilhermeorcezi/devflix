import React from 'react';
import './styles';

export default function DefaultPage({ children }) {
	return (
		<>
			<Menu />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}
