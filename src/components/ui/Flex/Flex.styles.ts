import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import Flex from './Flex';

type FlexStyledProps = Pick<ComponentProps<typeof Flex>, 'align' | 'direction' | 'justify'>;

export const FlexStyled = styled.div<FlexStyledProps>`
	display: flex;

	${({ align, direction, justify }) => css`
		align-items: ${align};
		flex-direction: ${direction};
		justify-content: ${justify};
	`}
`;
