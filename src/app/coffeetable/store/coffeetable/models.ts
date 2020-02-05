import * as Field from '../field/models';

export const featureKey = 'coffeetable';

export interface State {
  [Field.featureKey]: Field.State;
}
