import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PartsService } from "../services/parts.service";
import * as PartActions from "./part.action";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class PartsEffects {
    constructor(private action$: Actions, private partsService: PartsService) { }
    loadSongs$ = createEffect(() =>
        this.action$.pipe(
            ofType(PartActions.loadParts),
            mergeMap(() =>
                this.partsService.getAll().pipe(
                    map((parts) => PartActions.loadPartsSuccess({ parts })),
                    catchError(() => of({ type: 'load error' }))
                )
            )
        )
    );
}