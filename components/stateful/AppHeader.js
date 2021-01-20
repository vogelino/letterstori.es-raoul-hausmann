import React from 'react';
import AppHeader from '../presentational/AppHeader';

export default () => (
	<AppHeader
		links={[
			{
				id: 'info',
				onClick: () => {},
				text: 'Über das Projekt',
				title: 'Mehr informationen über Letterstori.es',
				isActive: false,
			},
			{
				id: 'legal',
				onClick: () => {},
				text: 'Impressum',
				title: 'Rechtliches',
				isActive: false,
			},
		]}
	/>
);
