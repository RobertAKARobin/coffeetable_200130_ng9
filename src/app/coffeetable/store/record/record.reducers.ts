import {
  Action,
  createReducer,
  on,
} from '@ngrx/store';

import * as Actions from './record.actions';
import * as Model from './record.models';

import sample from '../sample.json';

export const initialState: Model.State = Model.adapter.getInitialState({
  ...sample.collection.records,
  idOfFocus: undefined,
});

const _reducer = createReducer(
  initialState,
  on(Actions.addOne,
    (state, action) => Model.adapter.addOne({
      data: {},
      id: Date.now().toString(),
    }, state),
  ),
  on(Actions.updateOne,
    (state, payload) => Model.adapter.updateOne(payload, state),
  ),
);

export function reducer(state: Model.State | undefined, action: Action) {
  return _reducer(state, action);
}
