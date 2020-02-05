import * as Field from '../field/models';
import * as Record from '../record/models';

export const featureKey = 'collection';

export interface State {
  [Field.featureKey]: Field.State;
  [Record.featureKey]: Record.State;
}
