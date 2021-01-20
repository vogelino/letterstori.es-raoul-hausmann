const defaults = {
	selectedStory: {
		id: null,
		__typename: 'SelectedStoryId',
	},
};

const resolvers = {
	deselectStory(_, data, { cache }) {
		cache.writeData({ data: defaults });
		return null;
	},
	selectStory(_, { id }, { cache }) {
		cache.writeData({
			data: {
				selectedStory: {
					...defaults.selectedStory,
					id,
				},
			},
		});
		return id;
	},
};

export default { defaults, resolvers };
