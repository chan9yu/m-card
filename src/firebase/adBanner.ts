import { collection, getDocs } from 'firebase/firestore';

import { store } from '.';
import { COLLECTIONS } from '../constants';
import type { AdBanner } from '../models/adBanner';

export async function getAbBanners() {
	const abBannerSnapshot = await getDocs(collection(store, COLLECTIONS.ADBANNER));
	const data = abBannerSnapshot.docs.map(banner => ({
		id: banner.id,
		...(banner.data() as AdBanner)
	}));

	return data;
}
