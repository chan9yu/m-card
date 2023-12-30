import styled from '@emotion/styled';

import { colors, zIndex } from '../../../styles/variables';
import Button from '../Button';
import Text from '../Text';

export const ModalStyled = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${colors.white};
	border-radius: 8px;
	overflow: hidden;
	z-index: ${zIndex.modal};
	width: 320px;
	padding: 24px;
	box-sizing: border-box;
`;

export const Title = styled(Text)`
	margin-bottom: 6px;
`;

export const ModalButton = styled(Button)`
	margin-top: 12px;
	border: none;
`;
