import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, LabelText, Input } from './styled';

function FormField({ label, type, name, value, onChange }) {
	const isTypeTextArea = type === 'textarea';
	const tag = isTypeTextArea ? 'textarea' : 'input';
	const hasValue = Boolean(value.length);
	const fieldId = `id_${name}`;

	return (
		<FormFieldWrapper>
			<Label htmlFor={fieldId}>
				<Input
					as={tag}
					id={fieldId}
					type={type}
					value={value}
					name={name}
					hasValue={hasValue}
					className="colorField"
					onChange={onChange}
				/>
				<LabelText>{label}</LabelText>
			</Label>
		</FormFieldWrapper>
	);
}

FormField.defaultProps = {
	type: 'text',
	value: '',
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default FormField;
