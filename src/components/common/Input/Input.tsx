import { ComponentPropsWithRef, forwardRef } from 'react';
import * as S from './Input.styles';

type InputProps = ComponentPropsWithRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <S.InputStyled ref={ref} {...props} />;
});

Input.displayName = 'Input';

export default Input;
