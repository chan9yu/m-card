import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import { createPortal } from 'react-dom';

import { colors } from '../../styles/variables';
import Button from '../ui/Button';

type FixedBottomButtonProps = {
	label: string;
} & ComponentProps<typeof Button>;

export default function FixedBottomButton({ label, ...rest }: FixedBottomButtonProps) {
	return createPortal(
		<Container
			initial={{
				translateY: '100%'
			}}
			transition={{
				duration: 0.3,
				ease: 'easeInOut'
			}}
			animate={{
				translateY: 0
			}}
		>
			<Button {...rest} size="md" full css={buttonStyles}>
				{label}
			</Button>
		</Container>,
		document.body
	);
}

const Container = styled(motion.div)`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${colors.white};
	padding: 20px 10px 8px;
	transform: translateY(100%);
`;

const buttonStyles = css`
	border-radius: 8px;
`;
