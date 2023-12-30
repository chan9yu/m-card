import Top from '../components/common/Top';
import AdBanners from '../components/home/AdBanners';
import CardList from '../components/home/CardList';

export default function HomePage() {
	return (
		<div>
			<Top
				title="해택 좋은 카드" //
				subtitle="회원님을 위해서 해택 좋은 카드를 모아봤어요"
			/>
			<AdBanners />
			<CardList />
		</div>
	);
}
