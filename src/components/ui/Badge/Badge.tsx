import Text from '../Text';
import * as S from './Badge.styles';

type BadgeProps = {
	label: string;
};

export default function Badge({ label }: BadgeProps) {
	return (
		<S.BadgeStyled>
			<Text bold typography="t7" color="white">
				{label}
			</Text>
		</S.BadgeStyled>
	);
}
