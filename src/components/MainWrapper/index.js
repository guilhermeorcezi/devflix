import React from 'react';
import { BannerContainer, Container, WatchButton, ImageBanner } from './styles';
import banner from '../../assets/img/banner.png';

export default function MainWrapper() {
	return (
		<BannerContainer>
			<Container>
				<Container.Item>
					<Container.Title>
						Plataforma para compartilhamento de vídeos sobre{' '}
						<Container.Span>desenvolvimento</Container.Span>{' '}e
						<Container.Span>{' '}tecnologia</Container.Span> .
					</Container.Title>
				</Container.Item>

				<Container.Item>
					<ImageBanner src={banner} alt="Devflix" />
					<WatchButton>Assistir</WatchButton>
				</Container.Item>
			</Container>
		</BannerContainer>
	);
}
