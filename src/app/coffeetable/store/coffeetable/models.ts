import * as Collection from '../collection/models';
import * as Field from '../field/models';

export const featureKey = 'coffeetable';

export interface State {
  [Collection.featureKey]: Collection.State;
  [Field.featureKey]: Field.State;
}
