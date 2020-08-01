import React, { useState, useEffect } from 'react';
import '../../components/FormField';
import { Link } from 'react-router-dom';
import DefaultPage from '../../template/DefaultPage';
import FormField from '../../components/FormField';
import Form from '../../components/Form/styled';
import Button from '../../components/Button/styled';

export default function Cadastrocategory() {
	const initialData = { name: '', description: '', color: '' };
	const [category, setCategory] = useState([]);
	const [values, setValues] = useState(initialData);

	useEffect(() => {
		fetch('http://localhost:3333/categorias').then(async (response) => {
			const res = await response.json();
			setCategory([...res]);
			console.log(res);
		});
	}, []);

	function setValue(key, value) {
		setValues({ ...values, [key]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();

		setCategory([...category], values);

		setValues(initialData);
	}

	function handleChange(e) {
		setValue(e.target.getAttribute('name'), e.target.value);
	}

	return (
		<DefaultPage>
			<Form onSubmit={handleSubmit}>
				<h1>Cadasto de categorias</h1>
				<FormField
					label="Descrição"
					type="text"
					name="description"
					value={values.description}
					onChange={handleChange}
				/>
				<FormField
					label="Cor"
					type="color"
					name="cor"
					value={values.cor}
					onChange={handleChange}
				/>

				<Button>Cadastrar</Button>
			</Form>

			<ul>
				{category.map((category) => {
					return <li key={category.key}>{category.titulo}</li>;
				})}
			</ul>

			<Link to="/">Ir para home</Link>
		</DefaultPage>
	);
}
