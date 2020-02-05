import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
} from '@ngrx/entity';

import { getEntityName } from '../utils';

export const Name = getEntityName('record');
export const featureKey = 'records';

export interface Record {
  // tslint:disable
  data: any;
  id: string;
}

export type Model = Record;

export interface State extends EntityState<Model> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Model> = createEntityAdapter<Model>();
