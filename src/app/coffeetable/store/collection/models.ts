import * as Field from '../field/models';

export const featureKey = 'collection';

export interface State {
  [Field.featureKey]: Field.State;
}
