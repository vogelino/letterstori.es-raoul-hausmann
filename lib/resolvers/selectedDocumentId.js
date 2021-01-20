const defaults = {
	selectedDocument: {
		id: null,
		__typename: 'SelectedDocumentId',
	},
};

const resolvers = {
	deselectDocument(_, data, { cache }) {
		cache.writeData({ data: defaults });
		return { data: defaults };
	},
	selectDocument(_, { id }, { cache }) {
		cache.writeData({
			data: {
				selectedDocument: {
					...defaults.selectedDocument,
					id,
				},
			},
		});
		return id;
	},
};

export default { defaults, resolvers };
