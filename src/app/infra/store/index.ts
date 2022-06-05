import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { IAnimalsState } from 'src/app/infra/store/animal/interfaces/animals-state.interface';
import { IMainPagesState } from 'src/app/infra/store/main-pages/interfaces/main-pages-state.interface';

export interface IApplicationState {
    mainPages: IMainPagesState;
    animals: IAnimalsState;
}

export function localStorageSyncReducer(
    reducer: ActionReducer<any>
): ActionReducer<any> {
    return localStorageSync({
        keys: ['mainPages', 'animals'],
    })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
    localStorageSyncReducer,
];
