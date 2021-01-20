import React from 'react';
import { storiesOf } from '@storybook/react';
import { FigmaPreview, ThemeDecorator } from '../.storybook/utils';
import DocumentRoute from '../components/DocumentRoute';

const addDocumentRouteStory = () => {
	storiesOf('DocumentRoute', module)
		.addDecorator(ThemeDecorator)
		.add('with one sender and one receiver', () => (
			<FigmaPreview nodeId="101%3A3319">
				<div style={{ display: 'flex' }}>
					<div style={{ marginRight: '2rem' }}>
						<DocumentRoute
							doc={{
								date: new Date(),
								title: 'Brief von Raoul Hausmann an Elfriede Hausmann. Jershöft',
								senders: [{ id: 'raoul-hausmann' }],
								recipients: [{ id: 'elfriede-hausmann' }],
								story: {
									title:
										'Raoul Hausmann und Hannah Höch – Eine Beziehung in Extremen',
									color: '#ED008C',
									lightColor: '#EDB2D5',
								},
							}}
							actorSorting={[
								'raoul-hausmann',
								'hannah-hoech',
								'vera-broido',
								'elfriede-hausmann',
							]}
						/>
					</div>
				</div>
			</FigmaPreview>
		))
		.add('with one sender and two receivers', () => (
			<FigmaPreview nodeId="101%3A3319">
				<div style={{ display: 'flex' }}>
					<div style={{ marginRight: '2rem' }}>
						<DocumentRoute
							doc={{
								date: new Date(),
								title: 'Brief von Hannah Hoech an Raoul und Elfriede Hausmann',
								senders: [{ id: 'hannah-hoech' }],
								recipients: [{ id: 'raoul-hausmann' }, { id: 'elfriede-hausmann' }],
								story: {
									title:
										'Raoul Hausmann und Hannah Höch – Eine Beziehung in Extremen',
									color: '#ED008C',
									lightColor: '#EDB2D5',
								},
							}}
							actorSorting={[
								'raoul-hausmann',
								'hannah-hoech',
								'vera-broido',
								'elfriede-hausmann',
							]}
						/>
					</div>
				</div>
			</FigmaPreview>
		))
		.add('with two senders and one receiver', () => (
			<FigmaPreview nodeId="101%3A3319">
				<div style={{ display: 'flex' }}>
					<div style={{ marginRight: '2rem' }}>
						<DocumentRoute
							doc={{
								date: new Date(),
								title: 'Brief von Raoul und Elfriede Hausmann an Hannah Hoech',
								senders: [{ id: 'raoul-hausmann' }, { id: 'elfriede-hausmann' }],
								recipients: [{ id: 'hannah-hoech' }],
								story: {
									title:
										'Raoul Hausmann und Hannah Höch – Eine Beziehung in Extremen',
									color: '#ED008C',
									lightColor: '#EDB2D5',
								},
							}}
							actorSorting={[
								'raoul-hausmann',
								'hannah-hoech',
								'vera-broido',
								'elfriede-hausmann',
							]}
						/>
					</div>
				</div>
			</FigmaPreview>
		));
};

export default addDocumentRouteStory;
