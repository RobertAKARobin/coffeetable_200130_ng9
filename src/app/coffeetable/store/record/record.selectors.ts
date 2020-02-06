import {
  createSelector,
} from '@ngrx/store';

import * as CollectionSelectors from '../collection/collection.selectors';

import * as Model from './record.models';

export const selectState = CollectionSelectors.selectRecords;

const adapter = Model.adapter.getSelectors(selectState);

export const selectAll = createSelector(
  adapter.selectAll,
  (records: Model.Schema[]) => records.map(record => new Model.Record(record)),
);

export const selectIdOfFocus = createSelector(
  selectState,
  (state: Model.State) => state.idOfFocus,
);
