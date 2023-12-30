import { collection, doc, writeBatch } from 'firebase/firestore';

import { store } from '../../firebase';
import { COLLECTIONS } from '../../constants';
import { card_list } from '../../mock/data';
import Button from '../common/Button';

export default function CardListAddButton() {
	const handleButtonClick = async () => {
		const batch = writeBatch(store);

		card_list.forEach(card => {
			const docRef = doc(collection(store, COLLECTIONS.CARD));
			batch.set(docRef, card);
		});

		await batch.commit();

		alert('카드 리스트 추가완료');
	};

	return <Button onClick={handleButtonClick}>카드 리스트 추가하기</Button>;
}
