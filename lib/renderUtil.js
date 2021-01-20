import { branch, renderNothing } from 'recompose';
import { prop, not, pipe } from 'ramda';

const noStorySelected = pipe(prop('story'), not);
export const hideIfNoStoryIsSelected = branch(noStorySelected, renderNothing);

const noDocumentSelected = pipe(prop('id'), not);
export const hideIfNoDocumentIsSelected = branch(noDocumentSelected, renderNothing);
