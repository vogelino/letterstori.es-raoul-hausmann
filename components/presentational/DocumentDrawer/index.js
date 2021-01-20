import React from 'react';
import Sticky from 'react-stickynode';
import DocumentDrawerHeader from '../../stateful/DocumentDrawerHeader';
import { DocumentDrawerContainer } from './styles';
import DocumentDrawerSplitView from '../../stateful/DocumentDrawerSplitView';

const DocumentDrawer = (props) => (
	<DocumentDrawerContainer>
		<Sticky top={0} innerZ={2}>
			<DocumentDrawerHeader {...props} />
		</Sticky>
		<DocumentDrawerSplitView {...props} />
	</DocumentDrawerContainer>
);

DocumentDrawer.propTypes = {};

export default DocumentDrawer;
