import React from 'react';
import AppHeader from '../presentational/AppHeader';

const StatefulAppHeader = () => (
	<AppHeader
		links={[
			{
				id: 'info',
				href: '/',
				text: 'Über das Projekt',
				title: 'Mehr informationen über Letterstori.es',
				isActive: false,
			},
		]}
	/>
);

export default StatefulAppHeader;
