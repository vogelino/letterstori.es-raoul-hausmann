import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('documentDetail');

export const DocumentStoryInformationContainer = styled.div`
	font-family: ${getVar('contextFontFamily', 'Merriweather')};
	font-size: ${getVar('contextFontSize', '1.5rem')};
	padding: 0 2rem;
	margin-bottom: 2rem;
	line-height: 2.5rem;
`;
