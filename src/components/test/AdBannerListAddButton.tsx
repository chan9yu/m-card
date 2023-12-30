import { collection, doc, writeBatch } from 'firebase/firestore';

import { store } from '../../firebase';
import { COLLECTIONS } from '../../constants';
import { adBanners } from '../../mock/data';
import Button from '../common/Button';

export default function AdBannerListAddButton() {
	const handleButtonClick = async () => {
		const batch = writeBatch(store);

		adBanners.forEach(banner => {
			const docRef = doc(collection(store, COLLECTIONS.ADBANNER));
			batch.set(docRef, banner);
		});

		await batch.commit();

		alert('배너 리스트 추가완료');
	};

	return <Button onClick={handleButtonClick}>배너 리스트 추가하기</Button>;
}
