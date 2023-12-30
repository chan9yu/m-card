import { ComponentPropsWithRef, forwardRef } from 'react';
import * as S from './Button.styles';

type ButtonProps = ComponentPropsWithRef<'button'> & {
	color?: 'primary' | 'success' | 'error';
	full?: boolean;
	size?: 'sm' | 'md' | 'lg';
	weak?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { children, ...rest } = props;

	return (
		<S.ButtonStyled ref={ref} {...rest}>
			{children}
		</S.ButtonStyled>
	);
});

Button.displayName = 'Button';

export default Button;
