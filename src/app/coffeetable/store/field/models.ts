import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
} from '@ngrx/entity';

import { getEntityName } from '../utils';

export const Name = getEntityName('field');
export const featureKey = 'fields';

export interface Schema {
  getter?: string;
  id: string;
}

export interface State extends EntityState<Schema> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Schema> = createEntityAdapter<Schema>();
