import { ComponentProps } from 'react';
import * as S from './Spacing.styles';

type SpacingProps = {
	direction?: 'vertical' | 'horizontal';
	size?: number;
} & ComponentProps<'div'>;

export default function Spacing(props: SpacingProps) {
	const { size = 16, direction = 'vertical', ...rest } = props;

	return (
		<S.SpacingStyled //
			size={size}
			direction={direction}
			{...rest}
		/>
	);
}
