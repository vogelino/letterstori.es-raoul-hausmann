import { useMemo } from 'react';
import entities from '../../data/entities';

export function useEntities() {
	const allEntities = useMemo(() => entities, []);

	return {
		entities: allEntities,
		entitiesLoading: false,
		error: null,
	};
}

export function useEntity(entityId) {
	const entity = useMemo(() => {
		if (!entityId) return null;
		return entities.find((e) => e.id === entityId) || null;
	}, [entityId]);

	return {
		entity,
		entityLoading: false,
		error: null,
	};
}
