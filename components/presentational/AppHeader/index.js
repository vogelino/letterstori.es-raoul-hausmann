import React from 'react';
import PropTypes from 'prop-types';
import { AppHeaderWrapper, Title, Bold, Link } from './styles';

const AppHeader = ({ links }) => (
	<AppHeaderWrapper>
		<Title>
			<Bold>LetterStori.es </Bold>Raoul Hausmann
		</Title>
		{links.map(({ text, ...rest }) => (
			<Link key={text} {...rest}>
				{text}
			</Link>
		))}
	</AppHeaderWrapper>
);

AppHeader.defaultProps = {
	links: [],
};

AppHeader.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			href: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		}),
	),
};

export default AppHeader;
