import styled, { css } from 'styled-components';

export const FormFieldWrapper = styled.div`
	position: relative;
	margin: 7px 0;
	textarea {
		min-height: 150px;
	}
	input[type='color'] {
		padding-left: 56px;
		width: 100px;
		height: 55px;
	}
`;

export const Label = styled.label``;

export const LabelText = styled.span`
	color: #e5e5e5;
	height: 57px;
	position: absolute;
	top: 0;
	left: 16px;

	display: flex;
	align-items: center;

	transform-origin: 0% 0%;
	font-size: 18px;
	font-style: normal;
	font-weight: 300;

	transition: 0.1s ease-in-out;
`;

export const Input = styled.input`
	flex: 1;
	background: #f0f0f5;
	border-radius: 8px;
	border: 0;
	padding: 16px 24px;
	font-size: 16px;
	color: #6c6c80;
	transition: border-color 0.3s;
	max-width: 500px;
	resize: none;
	display: block;
	outline: 0;

	&:focus {
		border-bottom-color: var(--primary);
	}

	&:focus:not([type='color']) + ${LabelText} {
		transform: scale(0.6) translateY(-10px);
	}

	${({ value }) => {
		const hasValue = value.length > 0;
		return (
			hasValue &&
			css`
				&:not([type='color']) + ${LabelText} {
					transform: scale(0.6) translateY(-10px);
				}
			`
		);
	}}

	${({ type }) => {
		const isColorType = type;

		return (
			isColorType === 'color' &&
			css`
				width: 400px;
			`
		);
	}}
`;
