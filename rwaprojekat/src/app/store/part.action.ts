import { createAction, props } from "@ngrx/store";
import { Part } from "../models/part";

export const loadParts = createAction('Load Parts');

export const loadPartsSuccess = createAction(
    'Load Parts Success',
    props<{ parts: Part[] }>()
);

export const selectPart = createAction(
    'Select Part',
    props<{ partId: number }>()
);

// export const ratePart = createAction(
//   'Rate a part',
//   props<{ partId: number; rating: PartRating }>()
// );