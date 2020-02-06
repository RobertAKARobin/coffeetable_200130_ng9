import * as Model from './collection.models';

import * as Field from '../field';
import * as Record from '../record';

import {
  Action,
  combineReducers,
} from '@ngrx/store';

export function reducers(state: Model.State | undefined, action: Action) {
  return combineReducers({
    [Field.featureKey]: Field.Store.reducer,
    [Record.featureKey]: Record.Store.reducer,
  })(state, action);
}
