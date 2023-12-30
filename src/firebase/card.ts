import { collection, getDocs } from 'firebase/firestore';

import { store } from '.';
import { COLLECTIONS } from '../constants';
import type { Card } from '../models/card';

export async function getCards() {
	const cardSnapshot = await getDocs(collection(store, COLLECTIONS.CARD));
	const data = cardSnapshot.docs.map(doc => ({
		id: doc.id,
		...(doc.data() as Card)
	}));

	return data;
}
