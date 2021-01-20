import gql from 'graphql-tag';

export default gql`
query getAppUi {
  appUi @client {
    loading
    windowWidth
    windowHeight
  }
}
`;
