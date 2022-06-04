import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AnimalReducer } from 'src/app/infra/store/animal';
import { MainPagesReducer } from 'src/app/infra/store/main-pages';

export interface State {}

export function localStorageSyncReducer(
    reducer: ActionReducer<any>
): ActionReducer<any> {
    return localStorageSync({
        keys: ['mainPages', 'animals'],
    })(reducer);
}

export const reducers: ActionReducerMap<State> = {
    mainPages: MainPagesReducer.reducer,
    animals: AnimalReducer.reducer,
};

export const metaReducers: Array<MetaReducer<any, any>> = [
    localStorageSyncReducer,
];
