import styled from 'styled-components';

const Button = styled.button`
	color: var(--white);
	background-color: var(--black);
	border: 1px solid var(--white);
	box-sizing: border-box;
	cursor: pointer;
	padding: 16px 24px;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	outline: none;
	border-radius: 5px;
	-webkit-text-decoration: none;
	text-decoration: none;
	display: inline-block;
	-webkit-transition: opacity 0.3s;
	transition: opacity 0.3s;

	&:focus {
		opacity: 0.5;
	}
`;

export default Button;
