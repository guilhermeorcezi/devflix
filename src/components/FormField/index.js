import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, LabelText, Input } from './styled';

function FormField({ label, type, name, value, onChange, suggestions }) {
	const isTypeTextArea = type === 'textarea';
	const tag = isTypeTextArea ? 'textarea' : 'input';
	const hasValue = Boolean(value.length);
	const fieldId = `id_${name}`;
	const hasSuggestions = Boolean(suggestions.length);

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
					onChange={onChange}
					autoComplete={hasSuggestions ? 'off' : 'on'}
					list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
				/>
				<LabelText>{label}</LabelText>
				{hasSuggestions && (
					<datalist id={`suggestionFor_${fieldId}`}>
						{suggestions.map((suggestion) => (
							<option
								value={suggestion}
								key={`suggestionFor_${fieldId}_option${suggestion}`}
							>
								{suggestion}
							</option>
						))}
					</datalist>
				)}
			</Label>
		</FormFieldWrapper>
	);
}

FormField.defaultProps = {
	type: 'text',
	value: '',
	onChange: () => {},
	suggestions: [],
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
