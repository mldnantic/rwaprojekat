import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { partsReducer, PartsState } from "./store/part.reducer";
import { isDevMode } from "@angular/core";

export interface AppState {
    parts: PartsState;
}

export const reducers: ActionReducerMap<AppState> = {
    parts: partsReducer
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];