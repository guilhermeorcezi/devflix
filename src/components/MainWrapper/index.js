import React from 'react';
import VideoFrame from '../VideoFrame';
import { BannerContainer, Container, WatchButton } from './styles';

function getYouTubeId(youtubeURL) {
	return youtubeURL.replace(
		/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
		'$7'
	);
}

export default function MainWrapper({ videoTitle, videoDescription, url }) {
	const youTubeID = getYouTubeId(url);
	const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

	return (
		<BannerContainer backgroundImage={bgUrl}>
			<Container>
				<Container.Item>
					<Container.Title>{videoTitle}</Container.Title>

					<Container.Description>{videoDescription}</Container.Description>
				</Container.Item>

				<Container.Item>
					<VideoFrame youtubeID={youTubeID} />
					<WatchButton>Assistir</WatchButton>
				</Container.Item>
			</Container>
		</BannerContainer>
	);
}
