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

}

export class Record implements Schema {
  public data !: any; // tslint:disable-line
  public id !: string;

  constructor(
    state: Schema,
  ) {
    this.data = state.data;
    this.id = state.id;
  }

}

export const adapter: EntityAdapter<Schema> = createEntityAdapter<Schema>();
