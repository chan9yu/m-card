import styled from '@emotion/styled';
import { zIndex } from '../../../styles/variables';

export const DimmedStyled = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.26);
	z-index: ${zIndex.dimmed};
`;
