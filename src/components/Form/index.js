import styled from 'styled-components';

const Form = styled.form`
	margin: 30px auto 80px auto;
	padding: 64px;
	max-width: 500px;
	background: #fff;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 36px;
		text-transform: uppercase;
		text-align: center;
	}

	span {
		font-size: 14px;
		font-weight: normal;
		color: var(--text-color);
	}

	input {
		justify-item: center;
	}

	a {
		margin-top:50px;
		color: var(--primary);
		text-decoration: none;
		text-transform: uppercase;
		font-weight: bold;
	}
`;

export default Form;
