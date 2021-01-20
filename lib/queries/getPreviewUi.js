import gql from 'graphql-tag';

export default gql`
query getPreviewUi {
  previewUi @client {
    showAnnotations
    showStoryInformations
    previewMode
    hoveredAnnotationId
  }
}
`;
