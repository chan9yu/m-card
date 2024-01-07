import { CSSProperties, ComponentPropsWithRef, ElementType, forwardRef } from 'react';
import * as S from './Flex.styles';

type FlexProps = {
	as?: ElementType;
	align?: CSSProperties['alignItems'];
	direction?: CSSProperties['flexDirection'];
	justify?: CSSProperties['justifyContent'];
} & ComponentPropsWithRef<'div'>;

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
	const { as, children, ...rest } = props;

	return (
		<S.FlexStyled as={as} ref={ref} {...rest}>
			{children}
		</S.FlexStyled>
	);
});

Flex.displayName = 'Flex';

export default Flex;
