import { ComponentPropsWithRef, FocusEventHandler, ReactNode, forwardRef, useState } from 'react';

import { Colors } from '../../../styles/variables';
import Input from '../Input';
import * as S from './TextField.styles';

type TextFieldProps = ComponentPropsWithRef<'input'> & {
	hasError?: boolean;
	helpMessage?: ReactNode;
	label?: ReactNode;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
	const { hasError, helpMessage, label, onFocus, onBlur, ...rest } = props;

	const [focused, setFocused] = useState(false);

	const labelColor: Colors = hasError ? 'red' : focused ? 'blue' : 'black';

	const handleFocus: FocusEventHandler<HTMLInputElement> = event => {
		setFocused(true);
		onFocus && onFocus(event);
	};

	const handleBlur: FocusEventHandler<HTMLInputElement> = event => {
		setFocused(false);
		onBlur && onBlur(event);
	};

	return (
		<div>
			{label && (
				<S.LabelText typography="t7" color={labelColor} display="inline-block">
					{label}
				</S.LabelText>
			)}
			<Input
				ref={ref} //
				aria-invalid={hasError}
				onFocus={handleFocus}
				onBlur={handleBlur}
				{...rest}
			/>
			{helpMessage && (
				<S.HelpText typography="t7" color={labelColor}>
					{helpMessage}
				</S.HelpText>
			)}
		</div>
	);
});

TextField.displayName = 'TextField';

export default TextField;
