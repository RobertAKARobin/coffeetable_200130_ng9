import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
} from '@ngrx/entity';

import * as Record from '../record/record.models';
import { getEntityName } from '../utils';

export const Name = getEntityName('field');
export const featureKey = 'fields';

export interface Schema {
  getter?: string;
  id: string;
}

export type displayValue = (
  string
  | number
  | undefined
  | boolean
  | null
  | void
);

export class Field implements Schema {

  public getValue: ($record: Record.Schema) => displayValue;
  public getter: (string | undefined);
  public hasGetter: boolean;
  public id: string;

  constructor(
    state: Schema,
  ) {
    this.getter = state.getter;
    this.hasGetter = Boolean(state.getter);
    this.id = state.id;
    if (this.hasGetter) {
      this.getValue = eval(`($record) => ${state.getter}`); // tslint:disable-line
    } else {
      this.getValue = () => null;
    }
  }

}

export interface State extends EntityState<Schema> {
  idOfFocus: (string | undefined);
}

export const adapter: EntityAdapter<Schema> = createEntityAdapter<Schema>();
