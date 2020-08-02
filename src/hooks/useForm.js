import { useState } from 'react';

function useForm(initialData) {
	const [values, setValues] = useState(initialData);

	function setValue(key, value) {
		setValues({ ...values, [key]: value });
	}

	function handleChange(e) {
		setValue(e.target.getAttribute('name'), e.target.value);
	}

	function clearForm() {
		setValues(initialData);
	}

	return { values, handleChange, clearForm };
}

export default useForm;
