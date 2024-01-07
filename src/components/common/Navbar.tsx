import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';

import { ROUTER_PATH } from '../../constants';
import { colors } from '../../styles/variables';
import Button from '../ui/Button';
import Flex from '../ui/Flex';

export default function Navbar() {
	const location = useLocation();
	const showSignButton = [ROUTER_PATH.SIGNIN, ROUTER_PATH.SIGNUP].includes(location.pathname as ROUTER_PATH) === false; //

	return (
		<Flex justify="space-between" align="center" css={navbarContainerStyles}>
			<Link to={ROUTER_PATH.HOME}>홈</Link>
			{showSignButton && (
				<Link to={ROUTER_PATH.SIGNIN}>
					<Button>로그인/회원가입</Button>
				</Link>
			)}
		</Flex>
	);
}

const navbarContainerStyles = css`
	padding: 10px 24px;
	position: sticky;
	top: 0;
	background-color: ${colors.white};
	z-index: 10;
	border-bottom: 1px solid ${colors.grey};
`;
