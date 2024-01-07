import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { collection, doc, setDoc } from 'firebase/firestore';
import Form from '../components/sign/Form';
import { COLLECTIONS } from '../constants';
import { auth, store } from '../firebase';
import type { FormValues } from '../models/sign';

export default function SignupPage() {
	const handleSubmit = async (formValues: FormValues) => {
		const { email, name, password } = formValues;

		const { user } = await createUserWithEmailAndPassword(auth, email, password);
		await updateProfile(user, {
			displayName: name
		});

		const newUser = {
			uid: user.uid,
			email: user.email,
			displayName: name
		};

		await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser);
	};

	return (
		<div>
			<Form onSubmit={handleSubmit} />
		</div>
	);
}
