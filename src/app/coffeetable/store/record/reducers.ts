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
    (state, action) => Model.adapter.addOne(action.payload, state),
  ),
  on(Actions.upsertOne,
    (state, action) => Model.adapter.upsertOne(action.payload, state),
  ),
  on(Actions.addMany,
    (state, action) => Model.adapter.addMany(action.payload, state),
  ),
  on(Actions.upsertMany,
    (state, action) => Model.adapter.upsertMany(action.payload, state),
  ),
  on(Actions.updateOne,
    (state, action) => Model.adapter.updateOne(action.payload, state),
  ),
  on(Actions.updateMany,
    (state, action) => Model.adapter.updateMany(action.payload, state),
  ),
  on(Actions.deleteOne,
    (state, action) => Model.adapter.removeOne(action.payload, state),
  ),
  on(Actions.deleteMany,
    (state, action) => Model.adapter.removeMany(action.payload, state),
  ),
  on(Actions.loadMany,
    (state, action) => Model.adapter.addAll(action.payload, state),
  ),
  on(Actions.clearMany,
    state => Model.adapter.removeAll(state),
  ),
);

export function reducer(state: Model.State | undefined, action: Action) {
  return _reducer(state, action);
}
