import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../lib/theme';
import ApolloProvider from '../../lib/apollo';

const MainContainer = styled.div`
	width: 100vw;
	height: auto;
`;

const Layout = ({ children }) => (
	<ApolloProvider>
		<ThemeProvider theme={theme}>
			<MainContainer>{children}</MainContainer>
		</ThemeProvider>
	</ApolloProvider>
);

Layout.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Layout;
