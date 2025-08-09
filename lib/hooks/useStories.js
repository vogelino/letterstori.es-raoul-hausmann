import { useMemo } from 'react';
import stories from '../../data/stories';

export function useStories() {
	const allStories = useMemo(() => stories, []);

	return {
		stories: allStories,
		storiesLoading: false,
		error: null,
	};
}

export function useStory(storyId) {
	const story = useMemo(() => {
		if (!storyId) return null;
		return stories.find((s) => s.id === storyId) || null;
	}, [storyId]);

	return {
		story,
		storyLoading: false,
		error: null,
	};
}
