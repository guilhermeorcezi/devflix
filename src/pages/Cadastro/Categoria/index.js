import React from 'react';
import '../../../components/FormField';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../template/DefaultPage';
import FormField from '../../../components/FormField';
import Form from '../../../components/Form/';
import Button from '../../../components/Button/';
import useForm from '../../../hooks/useForm';
import categoriaRepository from '../../../repositories/Categoria';
import { toast } from 'react-toastify';

export default function Categoria() {
	const initialData = { title: '', description: '', color: '' };
	const { handleChange, values, clearForm } = useForm(initialData);

	function handleSubmit(e) {
		e.preventDefault();

		categoriaRepository
			.create({
				titulo: values.title,
				descricao: values.description,
				cor: values.color,
			})
			.then(() => {
				toast.success('Categoria cadastrada.');
				clearForm();
			});
	}

	return (
		<DefaultPage>
			<Form onSubmit={handleSubmit}>
				<h1>Cadasto de categorias</h1>
				<FormField
					label="Título"
					type="text"
					name="title"
					value={values.title}
					onChange={handleChange}
				/>
				<FormField
					label="Descrição"
					type="textarea"
					name="description"
					value={values.description}
					onChange={handleChange}
				></FormField>
				<FormField
					label="Cor"
					type="color"
					name="color"
					value={values.color}
					onChange={handleChange}
				/>

				<Button type="submit">Cadastrar</Button>
				<Link to="/cadastro/video">Cadastrar Vídeo</Link>
			</Form>

			<Link to="/">Ir para home</Link>
		</DefaultPage>
	);
}
