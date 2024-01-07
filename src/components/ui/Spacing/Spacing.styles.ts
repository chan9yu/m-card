import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import Spacing from './Spacing';

type SpacingStyledProps = Required<Pick<ComponentProps<typeof Spacing>, 'direction' | 'size'>>;

export const SpacingStyled = styled.div<SpacingStyledProps>`
	${({ direction, size }) => {
		const directionCss = {
			vertical: css`
				height: ${size}px;
			`,
			horizontal: css`
				width: ${size}px;
			`
		}[direction];

		return directionCss;
	}}
`;
