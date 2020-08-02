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
				setInitialData(item);
			})
			.catch((err) => {
				return;
			});
	}, []);

	return (
		<PageDefault>
			{initialData.length === 0 && <div>Loading...</div>}

			<MainWrapper />

			{initialData.map((item) => (
				<Carousel category={item} key={item.id} />
			))}
		</PageDefault>
	);
}

export default Home;
