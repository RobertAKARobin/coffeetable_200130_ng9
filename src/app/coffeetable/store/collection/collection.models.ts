import * as Field from '../field/field.models';
import * as Record from '../record/record.models';

export const featureKey = 'collection';

export interface State {
  [Field.featureKey]: Field.State;
  [Record.featureKey]: Record.State;
}
