import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

import FixedBottomButton from '../components/common/FixedBottomButton';
import ListRow from '../components/common/ListRow';
import Top from '../components/common/Top';
import Flex from '../components/ui/Flex';
import Text from '../components/ui/Text';
import { getCard } from '../firebase/card';
import { colors } from '../styles/variables';
import { remoteHtmlTags } from '../utils';

export default function CardPage() {
	const { id = '' } = useParams();

	const { data } = useQuery({
		queryKey: ['card', id],
		queryFn: () => getCard(id),
		enabled: id !== ''
	});

	if (!data) {
		return null;
	}

	const { benefit, corpName, name, tags, promotion } = data;

	const title = `${corpName} ${name}`;
	const subtitle = promotion ? promotion.title : tags.join(', ');

	return (
		<div>
			<Top title={title} subtitle={remoteHtmlTags(subtitle)} />
			<ul>
				{benefit.map((text, idx) => (
					<motion.li
						key={idx}
						initial={{
							opacity: 0,
							translateX: -90
						}}
						transition={{
							duration: 0.5,
							ease: 'easeInOut',
							delay: idx * 0.1
						}}
						animate={{
							opacity: 1,
							translateX: 0
						}}
					>
						<ListRow
							as="div"
							contents={<ListRow.Texts title={`혜택 ${idx + 1}`} subtitle={text} />}
							left={<CheckIcon />}
						/>
					</motion.li>
				))}
			</ul>
			{promotion && (
				<Flex direction="column" css={termsContainerStyles}>
					<Text bold>유의사항</Text>
					<Text typography="t7">{remoteHtmlTags(promotion.terms)}</Text>
				</Flex>
			)}
			<FixedBottomButton label="신청하기" onClick={() => {}} />
		</div>
	);
}

const termsContainerStyles = css`
	margin-top: 80px;
	padding: 0 24px 80px;
`;

const CheckIcon = () => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
				fill={colors.blue}
			/>
		</svg>
	);
};
