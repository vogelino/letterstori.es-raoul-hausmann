import gql from 'graphql-tag';

export default gql`
query getDocumentInformationsSidebar {
  documentInformationsSidebar @client {
    isOpen
  }
}
`;
