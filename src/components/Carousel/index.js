import React from 'react';
import { CardGroup, Title } from './styles';
import VideoCard from '../VideoCard';
import { SliderItem } from './components/Slider/styles';
import Slider from './components/Slider/';

export default function Carousel({ category }) {
	const categoryTitle = category.titulo;
	const categoryColor = category.cor;
	const videos = category.videos;

	return (
		<CardGroup>
			{categoryTitle && (
				<>
					<Title style={{ backgroundColor: categoryColor || 'red' }}>
						{categoryTitle}
					</Title>
				</>
			)}
			<Slider>
				{videos.map((video, index) => {
					return (
						<SliderItem key={video.titulo}>
							<VideoCard
								videoTitle={video.titulo}
								videoURL={video.url}
								categoryColor={categoryColor}
							/>
						</SliderItem>
					);
				})}
			</Slider>
		</CardGroup>
	);
}
