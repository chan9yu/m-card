import { css } from '@emotion/react';

import Button from './components/common/Button';
import { useModalContext } from './contexts/ModalContext';
import GlobalStyle from './styles/GlobalStyle';

const containerStyles = css`
	width: 100dvw;
	height: 100dvh;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function App() {
	const { open } = useModalContext();

	return (
		<>
			<GlobalStyle />
			<div css={containerStyles}>
				<Button onClick={() => open({ description: '내역페이지에서 확인해주세요.', title: '카드신청완료' })}>
					open
				</Button>
			</div>
		</>
	);
}
