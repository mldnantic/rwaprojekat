import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Part } from "../models/part";
import { createReducer, on } from "@ngrx/store";
import * as Actions from "./part.action";

export interface PartsState extends EntityState<Part> {
    selectedPart: number;
}

const adapter = createEntityAdapter<Part>();

export const initialState: PartsState = adapter.getInitialState({
    selectedPart: 0,
});

export const partsReducer = createReducer(
    initialState,
    on(Actions.selectPart, (state, {partId}) => {
        return{
            ...state,
            selectedPart: partId,
        };
    }),
    on(Actions.loadPartsSuccess, (state, {parts}) => 
        adapter.setAll(parts, state)
    ),
//  on(Actions.ratePart, (state, { partId, rating }) =>
//  adapter.updateOne(
//       {
//         id: partId,
//         changes: {
//           rating,
//         },
//       },
//       state
//     )
//   )
)