import { ComponentProps } from 'react';
import * as S from './Dimmed.styles';

type DimmedProps = ComponentProps<'div'>;

export default function Dimmed(props: DimmedProps) {
	const { children, ...rest } = props;

	return <S.DimmedStyled {...rest}>{children}</S.DimmedStyled>;
}
