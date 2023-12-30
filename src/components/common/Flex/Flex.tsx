import { CSSProperties, ComponentPropsWithRef, forwardRef } from 'react';
import * as S from './Flex.styles';

type FlexProps = ComponentPropsWithRef<'div'> & {
	align?: CSSProperties['alignItems'];
	direction?: CSSProperties['flexDirection'];
	justify?: CSSProperties['justifyContent'];
};

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
	const { children, ...rest } = props;

	return (
		<S.FlexStyled ref={ref} {...rest}>
			{children}
		</S.FlexStyled>
	);
});

Flex.displayName = 'Flex';

export default Flex;
