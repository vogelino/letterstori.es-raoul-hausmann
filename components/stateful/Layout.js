import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import theme from '../../lib/theme';

const MainContainer = styled.div`
	width: 100vw;
	height: auto;
`;

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<MainContainer>{children}</MainContainer>
	</ThemeProvider>
);

Layout.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Layout;
