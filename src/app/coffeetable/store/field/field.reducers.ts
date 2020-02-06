import {
  Action,
  createReducer,
  on,
} from '@ngrx/store';

import * as Actions from './field.actions';
import * as Model from './field.models';

import sample from '../sample.json';

export const initialState: Model.State = Model.adapter.getInitialState({
  ...sample.collection.fields,
});

const _reducer = createReducer(
  initialState,
  on(Actions.addOne,
    (state, payload) => Model.adapter.addOne({
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
