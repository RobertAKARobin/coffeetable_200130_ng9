import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import * as Model from './field.models';

const prefix = Model.Name.Single;

export const addOne = createAction(
  `${prefix} Add`,
);

export const updateOne = createAction(
  `${prefix} Update`,
  props<{
    id: Model.Schema['id'],
    changes: {
      [key: string]: any, // tslint:disable-line
    },
  }>(),
);
