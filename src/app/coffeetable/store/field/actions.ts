import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Model } from './models';

const prefix = `Field`;

export const loadMany = createAction(
  `${prefix} Load`,
  props<{ payload: Model[] }>(),
);

export const addOne = createAction(
  `${prefix} Add`,
  props<{ payload: Model }>(),
);

export const upsertOne = createAction(
  `${prefix} Upsert`,
  props<{ payload: Model }>(),
);

export const addMany = createAction(
  `${prefix} Add many`,
  props<{ payload: Model[] }>(),
);

export const upsertMany = createAction(
  `${prefix} Upsert many`,
  props<{ payload: Model[] }>(),
);

export const updateOne = createAction(
  `${prefix} Update`,
  props<{ payload: Update<Model> }>(),
);

export const updateMany = createAction(
  `${prefix} Update many`,
  props<{ payload: Array<Update<Model>> }>(),
);

export const deleteOne = createAction(
  `${prefix} Delete`,
  props<{ payload: string }>(),
);

export const deleteMany = createAction(
  `${prefix} Delete many`,
  props<{ payload: string[] }>(),
);

export const clearMany = createAction(
  `${prefix} Clear many`,
);
