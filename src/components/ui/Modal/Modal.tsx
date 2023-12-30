import { ReactNode } from 'react';

import Dimmed from '../Dimmed';
import Flex from '../Flex';
import Text from '../Text';
import * as S from './Modal.styles';

type ModalProps = {
	buttonLabel?: string;
	description?: ReactNode;
	onButtonClick?: () => void;
	open?: boolean;
	title?: ReactNode;
};

export default function Modal(props: ModalProps) {
	const {
		buttonLabel = '확인', //
		description,
		onButtonClick,
		open = false,
		title
	} = props;

	if (!open) {
		return null;
	}

	return (
		<Dimmed>
			<S.ModalStyled>
				{title && (
					<S.Title typography="t4" bold display="block">
						{title}
					</S.Title>
				)}
				{description && <Text typography="t7">{description}</Text>}
				<Flex justify="flex-end">
					<S.ModalButton weak onClick={onButtonClick}>
						{buttonLabel}
					</S.ModalButton>
				</Flex>
			</S.ModalStyled>
		</Dimmed>
	);
}
