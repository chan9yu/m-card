import { useEffect } from 'react';

import Top from '../components/layouts/Top';
import { getAbBanners } from '../firebase/adBanner';
import { getCards } from '../firebase/card';

export default function HomePage() {
	useEffect(() => {
		getCards().then(res => console.log('getCards', res));
		getAbBanners().then(res => console.log('getAbBanners', res));
	}, []);

	return (
		<div>
			<Top
				title="해택 좋은 카드" //
				subtitle="회원님을 위해서 해택 좋은 카드를 모아봤어요"
			/>
		</div>
	);
}
