import React from 'react';
import SlickSlider from 'react-slick';
import { Container} from './styles';

export default function Slider({ children }) {
	return (
		<Container>
			<SlickSlider
				{...{
					dots: false,
					infinite:true,
					speed: 300,
					centerMode:true,
					variableWidth:true,
					adaptiveHeight:true,
				}}
			>
				{children}
			</SlickSlider>
		</Container>
	);
}
