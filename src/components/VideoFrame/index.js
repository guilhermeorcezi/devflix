import React from 'react';

import { VideoContainer, ResponsiveFrame } from './styles';

export default function VideoFrame({ youtubeID }) {
	return (
		<VideoContainer>
			<ResponsiveFrame
				title="Título"
				src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</VideoContainer>
	);
}
