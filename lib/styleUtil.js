import { ifElse, pipe, type, equals, flip, append, concat, defaultTo, path } from 'ramda';

const getPathFromArrayOrString = ifElse(
	pipe(type, equals('String')),
	flip(append)(['theme']),
	concat(['theme']),
);

export const variable = (variablePath, defaultValue = '') =>
	pipe(path(getPathFromArrayOrString(variablePath)), defaultTo(defaultValue));

export const createVariableGetter = (rootKey) => (varName, defaultValue) =>
	variable([rootKey, varName], defaultValue);
