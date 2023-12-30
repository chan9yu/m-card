import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { colors } from '../../../styles/variables';
import Button from './Button';

const buttonColorMap = {
	primary: css`
		background-color: ${colors.blue};
		color: ${colors.white};
	`,
	success: css`
		background-color: ${colors.green};
		color: ${colors.white};
	`,
	error: css`
		background-color: ${colors.red};
		color: ${colors.white};
	`
};

const buttonWeakMap = {
	primary: css`
		background-color: ${colors.white};
		color: ${colors.blue};
		border: 1px solid ${colors.blue};
	`,
	success: css`
		background-color: ${colors.white};
		color: ${colors.green};
		border: 1px solid ${colors.green};
	`,
	error: css`
		background-color: ${colors.white};
		color: ${colors.red};
		border: 1px solid ${colors.red};
	`
};

const buttonSizeMap = {
	sm: css`
		font-size: 13px;
		padding: 8px 9px;
	`,
	md: css`
		font-size: 15px;
		padding: 10px 15px;
	`,
	lg: css`
		font-size: 18px;
		padding: 12px 10px;
	`
};

type ButtonStyledProps = Pick<ComponentProps<typeof Button>, 'color' | 'full' | 'size' | 'weak'>;

export const ButtonStyled = styled.button<ButtonStyledProps>`
	cursor: pointer;
	font-weight: bold;
	border-radius: 6px;

	&:disabled {
		opacity: 0.26;
		cursor: initial;
	}

	${({ color = 'primary', weak }) =>
		weak //
			? buttonWeakMap[color]
			: buttonColorMap[color]}

	${({ full }) =>
		full &&
		css`
			display: block;
			width: 100%;
			border-radius: 0;
		`}
  
	${({ size = 'sm' }) => buttonSizeMap[size]}
`;
