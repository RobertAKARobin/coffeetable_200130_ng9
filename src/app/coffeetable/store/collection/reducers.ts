import * as Model from './models';

import * as Field from '../field';

import {
  Action,
  combineReducers,
} from '@ngrx/store';

export function reducers(state: Model.State | undefined, action: Action) {
  return combineReducers({
    [Field.featureKey]: Field.Store.reducer,
  })(state, action);
}
