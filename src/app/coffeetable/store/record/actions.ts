import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Name, Schema } from './models';

const prefix = Name.Single;

export const addOne = createAction(
  `${prefix} Add`,
);

export const updateOne = createAction(
  `${prefix} Update`,
  props<{
    id: Schema['id'],
    changes: {
      // tslint:disable
      [key: string]: any,
    },
  }>(),
);
