import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('actor');

export const ActorWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 6rem;
	height: 6rem;
	border-radius: ${getVar('borderRadius', '4px')};
	font-size: 2rem;
	font-weight: bold;

	color: ${getVar('textColor', 'white')};
	background-color: ${getVar('backgroundColor', '#333333')};
	background-size: cover;
`;
