import React, { createContext, useContext, useState } from 'react';
import { useDocuments } from './hooks/useDocuments';
import { useEntities } from './hooks/useEntities';

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
	const { documents, documentsLoading } = useDocuments();
	const { entities: actors, entitiesLoading: actorsLoading } = useEntities();

	const [appUi, setAppUi] = useState({
		isLoading: documentsLoading || actorsLoading,
		windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1440,
		windowHeight: typeof window !== 'undefined' ? window.innerHeight : 800,
	});

	React.useEffect(() => {
		if (typeof window === 'undefined') return;
		const handleResize = () => {
			setAppUi((prev) => ({
				...prev,
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
			}));
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const [documentInformationsSidebar, setDocumentInformationsSidebar] =
		useState({
			isOpen: false,
		});

	const [previewUi, setPreviewUi] = useState({
		isPreviewMode: false,
		showAnnotations: true,
		showStoryInformations: false,
		previewMode: 'FILES',
		hoveredAnnotationId: null,
	});

	const [selectedStoryId, setSelectedStoryId] = useState(null);
	const [selectedDocumentId, setSelectedDocumentId] = useState(null);
	const [hoveredDocument, setHoveredDocument] = useState(null);
	const [visibleRange, setVisibleRange] = useState({ a: 0, b: 100 });

	const value = {
		// Data State
		documents,
		documentsLoading,
		actors,
		actorsLoading,
		actorsForDisplay: actors,
		visibleRange,
		setVisibleRange,

		// UI State
		appUi,
		setAppUi,
		documentInformationsSidebar,
		setDocumentInformationsSidebar,
		previewUi,
		setPreviewUi,
		selectedStoryId,
		setSelectedStoryId,
		selectedDocumentId,
		setSelectedDocumentId,
		hoveredDocument,
		setHoveredDocument,

		// Actions
		toggleDocumentInformationsSidebar: () => {
			setDocumentInformationsSidebar((prev) => ({
				...prev,
				isOpen: !prev.isOpen,
			}));
		},
		toggleAnnotationsVisibility: () => {
			setPreviewUi((prev) => ({
				...prev,
				showAnnotations: !prev.showAnnotations,
			}));
		},
		toggleStoryInformationsVisibility: () => {
			setPreviewUi((prev) => ({
				...prev,
				showStoryInformations: !prev.showStoryInformations,
			}));
		},
		togglePreviewMode: () => {
			setPreviewUi((prev) => ({
				...prev,
				previewMode: prev.previewMode === 'FILES' ? 'TRANSCRIPTION' : 'FILES',
			}));
		},
		setHoveredAnnotationId: (id) => {
			setPreviewUi((prev) => ({
				...prev,
				hoveredAnnotationId: id,
			}));
		},
	};

	return (
		<AppStateContext.Provider value={value}>
			{children}
		</AppStateContext.Provider>
	);
}

export function useAppState() {
	const context = useContext(AppStateContext);
	if (context === undefined) {
		throw new Error('useAppState must be used within an AppStateProvider');
	}
	return context;
}
