import {
  createSelector,
} from '@ngrx/store';

import * as CoffeetableSelectors from '../coffeetable/selectors';

import * as Model from './models';

export const selectState = CoffeetableSelectors.selectCollections;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = Model.adapter.getSelectors(selectState);
