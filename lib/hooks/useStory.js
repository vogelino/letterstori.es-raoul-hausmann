import { useAppState } from '../AppStateContext';

export function useStory(storyId) {
	const { stories } = useAppState();

	if (!storyId) return { story: null, storyLoading: false };

	const story = stories.find((s) => s.id === storyId);
	return {
		story: story || null,
		storyLoading: false,
	};
}

export function useAllStories() {
	const { stories } = useAppState();

	return {
		stories,
		storiesLoading: false,
	};
}
