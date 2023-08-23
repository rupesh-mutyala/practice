import { useDispatch, useSelector } from 'react-redux';
import { setPhoneNumber } from '../../../store/reducers/phone-number';
import styles from './styles.module.css';

function AllNumbers() {
	const { phoneNumber } = useSelector((state) => state);

	const dispatch = useDispatch();

	const handleDeleteContact = (name) => {
		dispatch(setPhoneNumber({ [name]: undefined }));
	};

	return (
		<div className={styles.container}>
			<h2>Name and Number Table with Delete</h2>
			<table className={styles.table}>
				<thead className={styles.thead}>
					<tr>
						<th>Name</th>
						<th>Number</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody className={styles.tbody}>
					{Object.entries(phoneNumber).map(([name, contact]) => {
						if (!contact) {
							return null;
						}

						return (
							<tr key={name}>
								<td>{name}</td>
								<td>{contact}</td>
								<td>
									<button
										className={styles.button}
										type="button"
										onClick={() => handleDeleteContact(name)}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default AllNumbers;
