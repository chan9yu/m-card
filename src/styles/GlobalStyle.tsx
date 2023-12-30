import { Global, css } from '@emotion/react';

import reset from './base/reset';
import root from './base/root';

const defaultStyle = css`
	${reset}
	${root}

	// button reset
	button {
		border: none;
		margin: 0;
		padding: 0;
		width: auto;
		overflow: visible;
		background: transparent;
		color: inherit;
		font: inherit;
		line-height: normal;
		appearance: none;
		-webkit-font-smoothing: inherit;
		-moz-osx-font-smoothing: inherit;
	}
`;

const GlobalStyle = () => <Global styles={defaultStyle} />;

export default GlobalStyle;
