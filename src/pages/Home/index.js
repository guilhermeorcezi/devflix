import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import InitialData from '../../data/initialData.json';
import MainWrapper from '../../components/MainWrapper';
import Carousel from '../../components/Carousel';
import React from 'react';

// import { Container } from './styles';

function Home() {
	return (
		<>
			<Menu />

			<MainWrapper
				videoTitle={InitialData.categorias[0].videos[0].titulo}
				url={InitialData.categorias[0].videos[0].url}
				videoDescription={
					'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
				}
			/>
			{InitialData.categorias.map((item, index) => (
				<Carousel
					category={item}
					key={index}
					ignoreFirstVideo={index === 0 ? true : false}
				/>
			))}
			<Footer />
		</>
	);
}

export default Home;
