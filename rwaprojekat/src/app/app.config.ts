import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './app.state';
import { provideEffects } from '@ngrx/effects';
import { PartsEffects } from './store/part.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(reducers, {metaReducers}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(PartsEffects),
  ]
};
