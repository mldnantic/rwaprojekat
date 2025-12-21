import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Part } from "../models/part";

export const selectPartsFeature = createSelector(
    (state: AppState) => state.parts,
    (parts) => parts
);

export const selectedPartIds = createSelector(
    selectPartsFeature,
    (parts) => parts.ids
);

export const selectPartList = createSelector(selectPartsFeature, (parts) =>
    parts.ids
        .map((id) => parts.entities[id])
        .filter((part) => part != null)
        .map((part) => <Part>part)
);

export const selectSelectedPartId = createSelector(
    selectPartsFeature,
    (parts) => parts.selectedPart
);

export const selectSelectedPart = createSelector(
    selectPartsFeature,
    selectSelectedPartId,
    (parts, partId) => parts.entities[partId]
);
