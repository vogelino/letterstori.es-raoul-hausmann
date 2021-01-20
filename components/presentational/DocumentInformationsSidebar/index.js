import React from 'react';
import PropTypes from 'prop-types';
import DocumentQuote from '../../presentational/DocumentQuote';
import DocumentStoryInformation from '../../presentational/DocumentStoryInformation';
import DocumentInformations from '../../presentational/DocumentInformations';
import { Wrapper, Header, Content } from './styles';

const DocumentInformationsSidebar = ({
	doc,
	isOpen,
	hoverAnnotation,
	hoveredAnnotationId,
	showStoryInformations,
	toggleStoryInformationsVisibility,
}) => (
	<Wrapper isOpen={isOpen}>
		<Header />
		{isOpen && (
			<Content>
				<DocumentInformations
					{...{ showStoryInformations, toggleStoryInformationsVisibility }}
					{...doc}
				/>
				{doc.story &&
					doc.story.elements.map(
						({ type, id, ...data }) =>
							type === 'annotation' ? (
								<DocumentQuote
									key={id}
									color={doc.story.color}
									id={id}
									hoverAnnotation={hoverAnnotation}
									hoveredAnnotationId={hoveredAnnotationId}
									{...data}
								/>
							) : (
								<DocumentStoryInformation key={id} {...data} />
							),
					)}
			</Content>
		)}
	</Wrapper>
);

DocumentInformationsSidebar.propTypes = {
	doc: PropTypes.shape({
		title: PropTypes.string.isRequired,
		story: PropTypes.shape({
			color: PropTypes.string.isRequired,
			elements: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.string.isRequired,
					type: PropTypes.oneOf(['annotation', 'context']),
					content: PropTypes.string.isRequired,
					points: PropTypes.string,
				}),
			),
		}),
	}).isRequired,
	isOpen: PropTypes.bool.isRequired,
	hoveredAnnotationId: PropTypes.string,
	hoverAnnotation: PropTypes.func.isRequired,
	showStoryInformations: DocumentInformations.propTypes.showStoryInformations,
	toggleStoryInformationsVisibility:
		DocumentInformations.propTypes.toggleStoryInformationsVisibility,
};

export default DocumentInformationsSidebar;
