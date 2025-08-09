import { useMemo } from 'react';
import documents from '../../data/documents';

export function useDocuments() {
	const allDocuments = useMemo(() => documents, []);

	return {
		documents: allDocuments,
		documentsLoading: false,
		error: null,
	};
}

export function useDocument(documentId) {
	const document = useMemo(() => {
		if (!documentId) return null;
		return documents.find((doc) => doc.id === documentId) || null;
	}, [documentId]);

	return {
		document,
		documentLoading: false,
		error: null,
	};
}
