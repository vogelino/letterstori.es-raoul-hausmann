import React from 'react';
import PropTypes from 'prop-types';
import { AppHeaderWrapper, Title, Bold, Link } from './styles';

const AppHeader = ({ links }) => (
	<AppHeaderWrapper>
		<Title>
			<Bold>LetterStori.es </Bold>Raoul Hausmann
		</Title>
		{links.map(({ text, onClick, ...rest }) => (
			<Link key={text} onClick={rest.isActive ? () => null : onClick} {...rest}>
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
			onClick: PropTypes.func.isRequired,
			text: PropTypes.string.isRequired,
		}),
	),
};

export default AppHeader;
