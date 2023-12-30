import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { colors } from '../../../styles/variables';
import Text from './Text';

const typographyMap = {
	t1: css`
		font-size: 30px;
		line-height: 1.35;
	`,
	t2: css`
		font-size: 26px;
		line-height: 1.34;
	`,
	t3: css`
		font-size: 22px;
		line-height: 1.4;
	`,
	t4: css`
		font-size: 20px;
		line-height: 1.45;
	`,
	t5: css`
		font-size: 17px;
		line-height: 1.5;
	`,
	t6: css`
		font-size: 15px;
		line-height: 1.5;
	`,
	t7: css`
		font-size: 13px;
		line-height: 1.5;
	`
};

type TextStyledProps = Pick<
	ComponentProps<typeof Text>,
	'bold' | 'color' | 'display' | 'fontWeight' | 'textAlign' | 'typography'
>;

export const TextStyled = styled.span<TextStyledProps>`
	${({ bold, color = 'black', display, fontWeight, textAlign }) => css`
		font-weight: ${bold ? 'bold' : fontWeight};
		color: ${colors[color]};
		display: ${display};
		text-align: ${textAlign};
	`}

	${({ typography = 't5' }) => typographyMap[typography]}
`;
