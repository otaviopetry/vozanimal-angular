import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { MainPagesReducer } from 'src/app/infra/store/main-pages';
import { IMainPagesState } from 'src/app/infra/store/main-pages/interfaces/main-pages-state.interface';

export interface State {}

export function localStorageSyncReducer(
    reducer: ActionReducer<any>
): ActionReducer<any> {
    return localStorageSync({ keys: ['mainPages'] })(reducer);
}

export const reducers: ActionReducerMap<State> = {
    mainPages: MainPagesReducer.reducer,
};

export const metaReducers: Array<MetaReducer<any, any>> = [
    localStorageSyncReducer,
];
