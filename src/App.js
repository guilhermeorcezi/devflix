import React from 'react';
import Menu from './components/Menu';
import InitialData from './data/initialData.json';
import MainWrapper from './components/MainWrapper';
import Carousel from './components/Carousel';

function App() {
	return (
		<main style={{ background: '#141414' }}>
			<Menu />

			<MainWrapper
				videoTitle={InitialData.categorias[0].videos[0].titulo}
				url={InitialData.categorias[0].videos[0].url}
				videoDescription={
					'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
				}
			/>
			{InitialData.categorias.map((item, index) => (
				<Carousel category={item} key={index} />
			))}
		</main>
	);
}

export default App;
