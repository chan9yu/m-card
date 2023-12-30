import { useInfiniteQuery } from '@tanstack/react-query';
import { flatten } from 'lodash';
import { useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getCards } from '../../firebase/card';
import ListRow from '../common/ListRow';

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

	return (
		<InfiniteScroll dataLength={cards.length} hasMore={hasNextPage} loader={<>loading...</>} next={loadMore}>
			{cards?.map((card, idx) => (
				<ListRow
					key={card.id}
					contents={<ListRow.Texts title={`${idx + 1}위`} subtitle={card.name} />}
					right={card.payback && <div>{card.payback}</div>}
					withArrow
				/>
			))}
		</InfiniteScroll>
	);
}
