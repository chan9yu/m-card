import { CSSProperties, ComponentPropsWithRef, forwardRef } from 'react';

import { Colors } from '../../../styles/variables';
import * as S from './Text.styles';

type TextProps = ComponentPropsWithRef<'span'> & {
	bold?: boolean;
	color?: Colors;
	display?: CSSProperties['display'];
	fontWeight?: CSSProperties['fontWeight'];
	textAlign?: CSSProperties['textAlign'];
	typography?: 't1' | 't2' | 't3' | 't4' | 't5' | 't6' | 't7';
};

const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
	const { children, ...rest } = props;

	return (
		<S.TextStyled ref={ref} {...rest}>
			{children}
		</S.TextStyled>
	);
});

Text.displayName = 'Text';

export default Text;
