import React, { useState, useEffect } from 'react';
import PageDefault from '../../template/DefaultPage';
import MainWrapper from '../../components/MainWrapper';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/Categoria';

function Home() {
	const [initialData, setInitialData] = useState([]);

	useEffect(() => {
		categoriasRepository
			.getAllWithVideos()
			.then((item) => {
				console.log('ai', item);
				setInitialData(item);
			})
			.catch((err) => {
				return;
			});
	}, []);

	return (
		<PageDefault>
			{initialData.length === 0 && <div>Loading...</div>}

			<MainWrapper
				videoTitle={''}
				url={'#'}
				videoDescription={
					'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
				}
			/>

			{initialData.map((item) => (
				<Carousel category={item} key={item.id} />
			))}
		</PageDefault>
	);
}

export default Home;
