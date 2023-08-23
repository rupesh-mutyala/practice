import { useState } from 'react';

import { useDispatch } from 'react-redux';
import styles from './styles.module.css';

import { setPhoneNumber } from '../../store/reducers/phone-number';
import AllNumbers from './AllNumbers';

function AddMobile() {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleMobileNumberChange = (event) => {
		setMobileNumber(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(setPhoneNumber({ [name]: mobileNumber }));

		setName('');
		setMobileNumber('');
	};

	return (
		<div className={styles.container}>
			<div className={styles.user_form}>
				<h2>User Information</h2>
				<form onSubmit={handleSubmit}>
					<div className={styles.form_group}>
						<div className={styles.label} htmlFor="name">
							Name:
						</div>
						<input
							type="text"
							id="name"
							value={name}
							onChange={handleNameChange}
							required
							className={styles.input}
						/>
					</div>
					<div className={styles.form_group}>
						<div className={styles.label} htmlFor="mobileNumber">
							Mobile Number:
						</div>
						<input
							type="tel"
							id="mobileNumber"
							value={mobileNumber}
							onChange={handleMobileNumberChange}
							required
							className={styles.input}
						/>
					</div>
					<button className={styles.button} type="submit">
						Submit
					</button>
				</form>
			</div>

			<AllNumbers />
		</div>
	);
}

export default AddMobile;
