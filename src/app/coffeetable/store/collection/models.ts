import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
} from '@ngrx/entity';

import { getEntityName } from '../utils';

export const Name = getEntityName('collection');
export const featureKey = 'collections';

export interface Collection {
  id: string;
}

export type Model = Collection;

export interface State extends EntityState<Model> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Model> = createEntityAdapter<Model>();
