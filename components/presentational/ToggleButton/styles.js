import styled from '@emotion/styled';
import OriginalIcon from '../Icon';

export const WrapperComponent = styled.div`
	display: inline-flex;
	flex-wrap: nowrap;
	align-items: center;
	height: 6rem;
	padding: 0;
	margin: 0;
	cursor: pointer;
	transition: opacity 0.2s ease-out;

	&:hover {
		opacity: 0.6;
	}
`;

export const Icon = styled(OriginalIcon)`
	margin: 0;
`;

export const TextContainer = styled.span`
	margin-left: 0;
`;
