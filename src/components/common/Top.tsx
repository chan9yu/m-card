import styled from '@emotion/styled';

import Flex from '../ui/Flex';
import Text from '../ui/Text';

type TopProps = {
	subtitle: string;
	title: string;
};

export default function Top({ subtitle, title }: TopProps) {
	return (
		<Container direction="column">
			<Text typography="t4" bold>
				{title}
			</Text>
			<Text typography="t7">{subtitle}</Text>
		</Container>
	);
}

const Container = styled(Flex)`
	padding: 24px;
`;
