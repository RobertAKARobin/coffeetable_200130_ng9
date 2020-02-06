import {
  createSelector,
} from '@ngrx/store';

import * as CollectionSelectors from '../collection/collection.selectors';

import * as Model from './record.models';

export const selectState = CollectionSelectors.selectRecords;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = Model.adapter.getSelectors(selectState);
