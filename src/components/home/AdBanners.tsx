import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getAbBanners } from '../../firebase/adBanner';
import { colors } from '../../styles/variables';
import Flex from '../ui/Flex';
import Text from '../ui/Text';

export default function AdBanners() {
	const { data: adBanners } = useQuery({
		queryKey: ['adBanners'],
		queryFn: getAbBanners
	});

	return (
		<Container>
			<Swiper>
				{adBanners?.map(banner => (
					<SwiperSlide key={banner.id}>
						<Link to={banner.link}>
							<Wrapper direction="column">
								<Text bold>{banner.title}</Text>
								<Text typography="t7">{banner.description}</Text>
							</Wrapper>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
}

const Container = styled.div`
	padding: 24px;
`;

const Wrapper = styled(Flex)`
	padding: 16px;
	background-color: ${colors.grey};
	border-radius: 4px;
`;
