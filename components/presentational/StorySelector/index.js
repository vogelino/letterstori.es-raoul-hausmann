import React from 'react';
import PropTypes from 'prop-types';
import { filter, pipe, find, gt, defaultTo } from 'ramda';
import { compose, withProps, withHandlers, withState, lifecycle } from 'recompose';
import {
	WrapperComponent,
	StorySelectorItem,
	StorySelectorItemTitle,
	StorySelectorOtherItemsContainer,
	StorySelectorOtherItems,
	Icon,
} from './styles';

const getStoryActiveItem = defaultTo({}, find)((item) => item.isActive);

const getStoryInactiveItems = pipe(filter((item) => !item.isActive));

const StorySelector = ({
	onClick,
	isOpen,
	storyItemTitle,
	storyItemsArr,
	interactive,
	registerNode,
}) => {
	const StoryActiveItem = getStoryActiveItem(storyItemsArr);
	const StoryInactiveItems = getStoryInactiveItems(storyItemsArr);
	const items = StoryInactiveItems.map((item) => (
		<StorySelectorItem
			key={item.id}
			storyItemColor={item.color}
			hasHoverPill
			interactive={interactive}
		>
			<span className="item-other">{item.title}</span>
		</StorySelectorItem>
	));

	return (
		<nav ref={registerNode}>
			<WrapperComponent onClick={onClick} isOpen={isOpen}>
				<StorySelectorItem
					style={{ position: 'relative' }}
					hoverColor={StoryActiveItem.color}
					key={StoryActiveItem.id}
					interactive={interactive}
				>
					<StorySelectorItemTitle
						className="item-title"
						pillColor={StoryActiveItem.color}
					>
						{storyItemTitle}

						{interactive && <Icon isOpen={isOpen} type="chevron-right" />}
					</StorySelectorItemTitle>
					{StoryActiveItem.title}
				</StorySelectorItem>

				<StorySelectorOtherItemsContainer>
					<StorySelectorOtherItems isOpen={isOpen}>{items}</StorySelectorOtherItems>
				</StorySelectorOtherItemsContainer>
			</WrapperComponent>
		</nav>
	);
};

StorySelector.defaultProps = {
	storyItemTitle: 'Aktuelle Story',
	isOpen: false,
};

StorySelector.propTypes = {
	onClick: PropTypes.func.isRequired,
	isOpen: PropTypes.bool,
	storyItemTitle: PropTypes.string,
	storyItemsArr: PropTypes.array.isRequired,
	interactive: PropTypes.bool.isRequired,
	registerNode: PropTypes.func.isRequired,
};

export default compose(
	withState('isOpen', 'setOpenState', false),
	withState('domNode', 'registerNode', { contains: () => false }),
	withHandlers({
		onClick: ({ storyItemsArr, isOpen, setOpenState }) =>
			gt(storyItemsArr.length, 1) ? () => setOpenState(!isOpen) : () => {},
		handleClickOutside: ({ setOpenState, domNode }) => (evt) => {
			if (domNode.contains(evt.target)) return;
			setOpenState(false);
		},
	}),
	lifecycle({
		componentWillMount() {
			document.addEventListener('mousedown', this.props.handleClickOutside, false);
		},
		componentWillUnmount() {
			document.removeEventListener('mousedown', this.props.handleClickOutside, false);
		},
	}),
	withProps(({ storyItemsArr }) => ({
		interactive: gt(storyItemsArr.length, 1),
	})),
)(StorySelector);
