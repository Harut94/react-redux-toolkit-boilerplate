import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

const TextInput = ({
	withForm,
	errors,
	name,
	type,
	register,
	className = '',
	label,
	handleChange,
	isDisabled,
	placeholder,
	maxLength,
	value,
}) => {
	return (
		<div className="input-block">
			{withForm ? (
				<div className="form-item">
					<label className="form-label">{label}</label>
					<input
						{...register(name)}
						type={type}
						placeholder={placeholder}
						disabled={isDisabled}
						maxLength={maxLength}
						className={className}
					/>
					<div className="error-messages-container">
						<ErrorMessage errors={errors} name={name} />
					</div>
				</div>
			) : (
				<div className="form-item">
					<label className="form-label">{label}</label>
					<input
						type={type}
						placeholder={placeholder}
						value={value}
						onChange={handleChange}
						maxLength={maxLength}
						disabled={isDisabled}
					/>
				</div>
			)}
		</div>
	);
};

export default TextInput;
