import { useInfiniteQuery } from '@tanstack/react-query';
import { flatten } from 'lodash';
import { useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../constants';
import { getCards } from '../../firebase/card';
import ListRow from '../common/ListRow';
import Badge from '../ui/Badge';
import Text from '../ui/Text';

export default function CardList() {
	const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
		queryKey: ['cards'],
		queryFn: ({ pageParam }) => getCards(pageParam),
		getNextPageParam: (lastPage: any) => lastPage.lastVisible,
		initialPageParam: false
	});

	const cards = flatten(data?.pages.map(({ items }) => items));

	const loadMore = useCallback(() => {
		if (hasNextPage === false || isFetching) return;
		fetchNextPage();
	}, [fetchNextPage, hasNextPage, isFetching]);

	const navigate = useNavigate();

	const handleMoveToCardPage = (cardId: string) => () => {
		navigate(`${ROUTER_PATH.CARD}/${cardId}`);
	};

	return (
		<InfiniteScroll
			dataLength={cards.length}
			hasMore={hasNextPage}
			loader={<Text>loading...</Text>}
			next={loadMore}
			scrollThreshold="100px"
		>
			<ul>
				{cards?.map((card, idx) => (
					<ListRow
						key={card.id}
						onClick={handleMoveToCardPage(card.id)}
						contents={<ListRow.Texts title={`${idx + 1}위`} subtitle={card.name} />}
						right={card.payback && <Badge label={card.payback} />}
						withArrow
					/>
				))}
			</ul>
		</InfiniteScroll>
	);
}
