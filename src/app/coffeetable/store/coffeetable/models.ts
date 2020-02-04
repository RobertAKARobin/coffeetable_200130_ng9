import * as Collection from '../collection/models';

export const featureKey = 'coffeetable';

export interface State {
  [Collection.featureKey]: Collection.State;
}
