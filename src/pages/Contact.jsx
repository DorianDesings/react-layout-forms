import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../constants/form-validation';

const Contact = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

	console.log(errors);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						{...register('name', {
							required: FORM_VALIDATIONS.name.require,
							pattern: {
								value: FORM_VALIDATIONS.name.pattern,
								message: FORM_VALIDATIONS.name.message
							}
						})}
					/>
				</div>
				<span>{errors && errors.name && errors.name.message}</span>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						{...register('email', {
							required: FORM_VALIDATIONS.email.require,
							pattern: {
								value: FORM_VALIDATIONS.email.pattern,
								message: FORM_VALIDATIONS.email.message
							}
						})}
					/>
				</div>
				<span>{errors?.email?.message}</span>
				<input type='submit' value='SEND' />
			</form>
		</>
	);
};

const onSubmit = (data, event) => {
	console.log(data);
};
export default Contact;
