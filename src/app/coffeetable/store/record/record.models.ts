import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
} from '@ngrx/entity';

import { getEntityName } from '../utils';

export const Name = getEntityName('record');
export const featureKey = 'records';

export interface Schema {
  data: any; // tslint:disable-line
  id: string;
}

export interface State extends EntityState<Schema> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Schema> = createEntityAdapter<Schema>();
