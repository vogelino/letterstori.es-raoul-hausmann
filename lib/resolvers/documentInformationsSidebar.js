import getDocumentInformationsSidebar from '../queries/getDocumentInformationsSidebar';

const defaults = {
	documentInformationsSidebar: {
		isOpen: true,
		__typename: 'DocumentInformationsSidebar',
	},
};

const resolvers = {
	toggleDocumentInformationsSidebar(_, __, { cache }) {
		cache.writeData({
			data: {
				documentInformationsSidebar: {
					...defaults.documentInformationsSidebar,
					isOpen: !cache.readQuery({ query: getDocumentInformationsSidebar })
						.documentInformationsSidebar.isOpen,
				},
			},
		});
		return false;
	},
};

export default { defaults, resolvers };
