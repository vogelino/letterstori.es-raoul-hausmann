import { useAppState } from '../AppStateContext';

export function useDocument(documentId) {
	const { documents } = useAppState();

	if (!documentId) return { document: null, documentLoading: false };

	const document = documents.find((doc) => doc.id === documentId);
	return {
		document: document || null,
		documentLoading: false,
	};
}

export function useAllDocuments() {
	const { documents } = useAppState();

	return {
		documents,
		documentsLoading: false,
	};
}
