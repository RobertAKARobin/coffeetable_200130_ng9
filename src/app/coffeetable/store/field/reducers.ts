import {
  Action,
  createReducer,
  on,
} from '@ngrx/store';

import * as Actions from './actions';
import * as Model from './models';

export const initialState: Model.State = Model.adapter.getInitialState({
  // additional entity state properties
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
