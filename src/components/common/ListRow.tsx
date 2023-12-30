import { css } from '@emotion/react';
import { ReactNode } from 'react';

import Flex from '../ui/Flex';
import Text from '../ui/Text';

type ListRowProps = {
	contents?: ReactNode;
	left?: ReactNode;
	onClick?: () => void;
	right?: ReactNode;
	withArrow?: boolean;
};

function ListRow(props: ListRowProps) {
	const { contents, left, onClick, right, withArrow } = props;

	return (
		<Flex as="li" align="center" css={listRowContainerStyles} onClick={onClick}>
			<Flex css={listRowLeftStyles}>{left}</Flex>
			<Flex css={listRowContentsStyles}>{contents}</Flex>
			<Flex>{right}</Flex>
			{withArrow && <ArrowRightIcon />}
		</Flex>
	);
}

const listRowContainerStyles = css`
	padding: 8px 24px;
`;

const listRowLeftStyles = css`
	margin-right: 14px;
`;

const listRowContentsStyles = css`
	flex: 1;
`;

function ListRowTexts({ subtitle, title }: { subtitle: string; title: string }) {
	return (
		<Flex direction="column">
			<Text bold>{title}</Text>
			<Text typography="t7">{subtitle}</Text>
		</Flex>
	);
}

ListRow.Texts = ListRowTexts;

export default ListRow;

const ArrowRightIcon = () => (
	<svg width={20} height={20} viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
		<path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
	</svg>
);
