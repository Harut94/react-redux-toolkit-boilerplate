import React from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
//actions
import { signInAction } from 'store/slices/auth/auth-async-actions';
//components
import TextInput from '../../components/input';

const SignIn = () => {
	const dispatch = useDispatch();

	const schema = yup.object().shape({
		username: yup.string().required('required field').max(50),
		password: yup
			.string()
			.required('required field')
			.matches('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$', 'please type valid password'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		reValidateMode: 'onChange',
		shouldUnregister: true,
		shouldFocusError: true,
		defaultValues: {
			password: '',
			username: '',
		},
	});

	// eslint-disable-next-line no-unused-vars
	const onSubmit = (values) => {
		dispatch(signInAction({ token: 'token' }));
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div style={{ marginTop: '5px ' }}></div>
				<div>
					<TextInput register={register} label={'username'} errors={errors} name={'username'} withForm />
					<TextInput
						register={register}
						errors={errors}
						label={'password'}
						name={'password'}
						type={'password'}
						withForm
					/>
				</div>
				<button>sign in</button>
			</form>
		</div>
	);
};

export default SignIn;
