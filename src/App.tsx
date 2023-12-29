import { css } from '@emotion/react';
import styled from '@emotion/styled';

const containerStyles = css`
	width: 100dvw;
	height: 100dvh;
	background-color: royalblue;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	width: 100px;
	height: 40px;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background-color: crimson;
	color: #fff;
	border-radius: 4px;
	border: 0;
`;

export default function App() {
	return (
		<div css={containerStyles}>
			<span>App</span>
			<Button>Button</Button>
		</div>
	);
}
