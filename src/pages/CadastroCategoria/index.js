import React, { useState } from 'react';
import '../../components/FormField';
import DefaultPage from '../../template/DefaultPage';
import FormField from '../../components/FormField';

export default function Cadastrocategory() {
	const initialData = { name: '', description: '', color: '' };
	const [category, setCategory] = useState([]);
	const [values, setValues] = useState(initialData);

	function handleSubmit(e) {
		e.preventDefault();

		setCategory([...category], values);

		setValues(initialData);
	}

	return (
		<DefaultPage>
			<h1>Cadasto de categorys</h1>

			<form onSubmit={handleSubmit}>
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

				<button>Cadastrar</button>
			</form>

			<ul>
				{category.map((category, indice) => {
					return <li key={`${category}${indice}`}>{category.nome}</li>;
				})}
			</ul>

			<Link to="/">Ir para home</Link>
		</DefaultPage>
	);
}
