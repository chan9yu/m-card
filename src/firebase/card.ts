import { QuerySnapshot, collection, getDocs, limit, query, startAfter } from 'firebase/firestore';

import { store } from '.';
import { COLLECTIONS } from '../constants';
import type { Card } from '../models/card';

/**
 * @param pageParam 지금 보이고 있는 맨 마지막 요소
 */
export async function getCards(pageParam?: QuerySnapshot<Card>) {
	const cardQuery = pageParam
		? query(collection(store, COLLECTIONS.CARD), startAfter(pageParam), limit(10))
		: query(collection(store, COLLECTIONS.CARD), limit(10));

	const cardSnapshot = await getDocs(cardQuery);
	const lastVisible = cardSnapshot.docs[cardSnapshot.docs.length - 1];
	const items = cardSnapshot.docs.map(doc => ({
		id: doc.id,
		...(doc.data() as Card)
	}));

	return { items, lastVisible };
}
