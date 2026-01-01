import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PartsService } from "../services/parts.service";
import { loadParts, loadPartsSuccess, viewPart } from "./part.action";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PartsEffects {
    
    private action$ = inject(Actions);
    private partsService = inject(PartsService);
    
    loadParts$ = createEffect(() =>
        this.action$.pipe(
            ofType(loadParts),
            mergeMap(() =>
                this.partsService.getAll().pipe(
                    map((parts) => loadPartsSuccess({ parts })),
                    catchError(() => of({ type: 'load error' }))
                )
            )
        )
    );

    viewPart$ = createEffect(() =>
        this.action$.pipe(
            ofType(viewPart),
            mergeMap(action => {
                const updatedPart = {
                    ...action.part,
                    viewCount: (action.part.viewCount ?? 0) + 1
                };

                return this.partsService.viewPart(updatedPart).pipe(
                    catchError(() => of({type: 'view part error'}))
                );
            })
        ),
        {
            dispatch: false
        }
    );
}