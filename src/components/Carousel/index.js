import React from 'react';
import { CardGroup, CardList, Title, ExtraLink } from './styles';
import VideoCard from '../VideoCard';

export default function Carousel({ ignoreFirstVideo, category }) {
	const categoryTitle = category.titulo;
	const categoryColor = category.cor;
	const categoryExtraLink = category.link_extra;
	const videos = category.videos;

	return (
		<CardGroup>
			{categoryTitle && (
				<>
					<Title style={{ backgroundColor: categoryColor || 'red' }}>
						{categoryTitle}
					</Title>
					{categoryExtraLink && (
						<ExtraLink href={categoryExtraLink.url} target="_blank">
							{categoryExtraLink.text}
						</ExtraLink>
					)}
				</>
			)}
			<CardList>
				{videos.map((video, index) => {
					if (ignoreFirstVideo && index === 0) {
						return null;
					}

					return (
						<li key={video.titulo}>
							<VideoCard
								videoTitle={video.titulo}
								videoURL={video.url}
								categoryColor={categoryColor}
							/>
						</li>
					);
				})}
			</CardList>
		</CardGroup>
	);
}
