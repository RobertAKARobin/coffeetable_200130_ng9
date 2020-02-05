import {
  createSelector,
} from '@ngrx/store';

import * as CollectionSelectors from '../collection/selectors';

import * as Model from './models';

export const selectState = CollectionSelectors.selectRecords;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = Model.adapter.getSelectors(selectState);
