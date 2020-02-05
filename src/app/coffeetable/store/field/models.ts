import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
} from '@ngrx/entity';

import { getEntityName } from '../utils';

export const Name = getEntityName('field');
export const featureKey = 'fields';

export interface Field {
  getter?: string;
  id: string;
}

export type Model = Field;

export interface State extends EntityState<Model> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Model> = createEntityAdapter<Model>();
