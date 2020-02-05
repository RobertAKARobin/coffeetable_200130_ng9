import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Model } from './models';

const prefix = `Record`;

export const addOne = createAction(
  `${prefix} Add`,
);

export const updateOne = createAction(
  `${prefix} Update`,
  props<{
    id: Model['id'],
    changes: {
      [key: string]: any,
    },
  }>(),
);
