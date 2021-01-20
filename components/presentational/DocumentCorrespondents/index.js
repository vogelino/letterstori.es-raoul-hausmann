import React from 'react';
import PropTypes from 'prop-types';
import {
	CorrespondentsWrapper,
	SendersColumn,
	RecipientsColumn,
	ArrowsColumn,
	ActorLine,
	ArrowsSvg,
	CorrespondentLine,
	CorrespondentPath,
	Separator,
} from './styles';

const buildFullName = ({ name, firstName, lastName }) => name || `${firstName || ''} ${lastName || ''}`.trim();

const getLongestLength = (...arrays) => arrays.map(({ length }) => length).sort().reverse()[0];

const CorrespondentsConnections = ({ recipients, senders, storyColor }) => {
	const totalWidth = 32;
	const halfWidth = totalWidth / 2;
	const labelHeight = 18;
	const longestArrayLength = getLongestLength(senders, recipients);
	const totalHeight = longestArrayLength * labelHeight;
	const halfHeight = totalHeight / 2;
	const arrowSize = 5;
	return (
		<ArrowsSvg height={totalHeight}>
			{senders.map((sender, idx) => {
				const pointA = {
					x: 0,
					y: ((totalHeight / senders.length) * idx) + (totalHeight / senders.length / 2),
				};
				const handleA = {
					x: halfWidth,
					y: pointA.y,
				};
				const pointB = {
					x: halfWidth,
					y: halfHeight,
				};
				const handleB = {
					x: halfWidth,
					y: halfHeight,
				};
				const path = `M${pointA.x},${pointA.y} C${handleA.x},${handleA.y} ${handleB.x},${handleB.y} ${pointB.x},${pointB.y}`;
				return <CorrespondentPath d={path} storyColor={storyColor} key={path} />;
			})}
			{recipients.map((recipient, idx) => {
				const pointA = {
					x: halfWidth,
					y: halfHeight,
				};
				const handleA = pointA;
				const pointB = {
					x: totalWidth,
					y: ((totalHeight / recipients.length) * idx) + (totalHeight / recipients.length / 2),
				};
				const handleB = {
					x: halfWidth,
					y: pointB.y,
				};
				const path = `M${pointA.x},${pointA.y} C${handleA.x},${handleA.y} ${handleB.x},${handleB.y} ${pointB.x},${pointB.y}`;
				return (
					<g key={path}>
						<CorrespondentPath d={path} storyColor={storyColor} />
						<CorrespondentLine
							x1={pointB.x}
							y1={pointB.y}
							x2={pointB.x - arrowSize}
							y2={pointB.y - arrowSize}
							stroke={storyColor}
						/>
						<CorrespondentLine
							x1={pointB.x}
							y1={pointB.y}
							x2={pointB.x - arrowSize}
							y2={pointB.y + arrowSize}
							stroke={storyColor}
						/>
					</g>
				);
			})}
		</ArrowsSvg>
	);
};

const DocumentCorrespondents = ({ senders, recipients, storyColor }) => (
	<CorrespondentsWrapper>
		<SendersColumn>
			{senders.map(({ id, name, firstName, lastName }) => (
				<ActorLine key={id}>{buildFullName({ name, firstName, lastName })}</ActorLine>
			))}
		</SendersColumn>
		<ArrowsColumn storyColor={storyColor}>
			<CorrespondentsConnections
				recipients={recipients}
				senders={senders}
				storyColor={storyColor || 'white'}
			/>
		</ArrowsColumn>
		<RecipientsColumn>
			{recipients.map(({ id, name, firstName, lastName }) => (
				<ActorLine key={id}>{buildFullName({ name, firstName, lastName })}</ActorLine>
			))}
		</RecipientsColumn>
		<Separator />
	</CorrespondentsWrapper>
);

DocumentCorrespondents.propTypes = {
	senders: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			firstName: PropTypes.string,
			lastName: PropTypes.string,
			name: PropTypes.string,
		}),
	).isRequired,
	recipients: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			firstName: PropTypes.string,
			lastName: PropTypes.string,
			name: PropTypes.string,
		}),
	).isRequired,
	storyColor: PropTypes.string,
};

CorrespondentsConnections.propTypes = {
	senders: DocumentCorrespondents.propTypes.senders,
	recipients: DocumentCorrespondents.propTypes.recipients,
	storyColor: DocumentCorrespondents.propTypes.storyColor,
};

export default DocumentCorrespondents;
