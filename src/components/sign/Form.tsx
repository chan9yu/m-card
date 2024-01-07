import { css } from '@emotion/react';

import FixedBottomButton from '../common/FixedBottomButton';
import Flex from '../ui/Flex';
import TextField from '../ui/TextField';
import Spacing from '../ui/Spacing';

export default function Form() {
	return (
		<Flex direction="column" css={formContainerStyles}>
			<TextField label="이메일" placeholder="aaa@gmail.com" />
			<Spacing />
			<TextField label="패스워드" type="password" />
			<Spacing />
			<TextField label="패스워드 확인" type="password" />
			<Spacing />
			<TextField label="이름" placeholder="aaa" />

			<FixedBottomButton label="회원가입" disabled onClick={() => {}} />
		</Flex>
	);
}

const formContainerStyles = css`
	padding: 24px;
`;
