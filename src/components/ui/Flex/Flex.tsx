import { CSSProperties, ComponentPropsWithRef, ElementType, forwardRef } from 'react';
import * as S from './Flex.styles';

type FlexProps = ComponentPropsWithRef<'div'> & {
	as?: ElementType;
	align?: CSSProperties['alignItems'];
	direction?: CSSProperties['flexDirection'];
	justify?: CSSProperties['justifyContent'];
};

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
