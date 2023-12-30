import { css } from '@emotion/react';

import Flex from '../common/Flex';
import Text from '../common/Text';

type TopProps = {
	subtitle: string;
	title: string;
};

export default function Top({ subtitle, title }: TopProps) {
	return (
		<Flex direction="column" css={containerStyles}>
			<Text typography="t4" bold>
				{title}
			</Text>
			<Text typography="t7">{subtitle}</Text>
		</Flex>
	);
}

const containerStyles = css`
	padding: 24px;
`;
