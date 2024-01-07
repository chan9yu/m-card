import { css } from '@emotion/react';
import { ChangeEventHandler, useCallback, useMemo, useState } from 'react';
import validator from 'validator';

import type { FormValues } from '../../models/sign';
import FixedBottomButton from '../common/FixedBottomButton';
import Flex from '../ui/Flex';
import Spacing from '../ui/Spacing';
import TextField from '../ui/TextField';

type FormProps = {
	onSubmit: (formValues: FormValues) => void;
};

export default function Form({ onSubmit }: FormProps) {
	const [formValues, setFormValues] = useState<FormValues>({
		email: '',
		name: '',
		password: '',
		rePassword: ''
	});
	const [dirty, setDirty] = useState<Partial<FormValues>>();

	const handleFormValues: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
		setFormValues(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	}, []);

	const handleBlur: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
		setDirty(prev => ({
			...prev,
			[e.target.name]: 'true'
		}));
	}, []);

	const errors = useMemo(() => validate(formValues), [formValues]);

	const 제출가능한상태인가 = Object.keys(errors).length === 0;

	const handleSignUp = () => {
		onSubmit(formValues);
	};

	return (
		<Flex as="form" direction="column" css={formContainerStyles}>
			<TextField
				label="이메일"
				name="email"
				type="email"
				placeholder="aaa@gmail.com"
				hasError={Boolean(dirty?.email) && Boolean(errors.email)}
				helpMessage={errors.email}
				value={formValues.email}
				onChange={handleFormValues}
				onBlur={handleBlur}
			/>
			<Spacing />
			<TextField
				label="패스워드"
				name="password"
				type="password"
				autoComplete="off"
				hasError={Boolean(dirty?.password) && Boolean(errors.password)}
				helpMessage={errors.password}
				value={formValues.password}
				onChange={handleFormValues}
				onBlur={handleBlur}
			/>
			<Spacing />
			<TextField
				label="패스워드 확인"
				name="rePassword"
				type="password"
				autoComplete="off"
				hasError={Boolean(dirty?.rePassword) && Boolean(errors.rePassword)}
				helpMessage={errors.rePassword}
				value={formValues.rePassword}
				onChange={handleFormValues}
				onBlur={handleBlur}
			/>
			<Spacing />
			<TextField
				label="이름"
				name="name"
				placeholder="aaa"
				hasError={Boolean(dirty?.name) && Boolean(errors.name)}
				helpMessage={errors.name}
				value={formValues.name}
				onChange={handleFormValues}
				onBlur={handleBlur}
			/>
			<FixedBottomButton
				label="회원가입" //
				type="button"
				disabled={!제출가능한상태인가}
				onClick={handleSignUp}
			/>
		</Flex>
	);
}

const formContainerStyles = css`
	padding: 24px;
`;

function validate(formValues: FormValues) {
	const { email, name, password, rePassword } = formValues;
	let errors: Partial<FormValues> = {};

	if (validator.isEmail(email) === false) {
		errors.email = '이메일 형식을 확인해 주세요.';
	}

	if (password.length < 8) {
		errors.password = '비밀번호를 8글자 이상 입력해 주세요.';
	}

	if (rePassword.length < 8) {
		errors.rePassword = '비밀번호를 8글자 이상 입력해 주세요.';
	}

	if (validator.equals(rePassword, password) === false) {
		errors.rePassword = '비밀번호를 확인해 주세요.';
	}

	if (name.length < 2) {
		errors.name = '이름은 2글자 이상 입력해 주세요.';
	}

	return errors;
}
