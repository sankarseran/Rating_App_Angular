import * as FavItemsActions from './fav.actions';
import * as fromRoot from './app.state';
import { data } from '../shared/data';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface FavItemsState {
    items: any;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export const FavInitialState = {
    items: {},
    loading: false,
    loaded: false,
    error: '',
};

export interface AppFavItemsState extends fromRoot.AppFavItemState {
    favItems: FavItemsState;
}

export function favItemsReducer(state = FavInitialState, action: FavItemsActions.Action): FavItemsState {
    switch (action.type) {
        case FavItemsActions.FavItemsActionTypes.LOAD_FAVITEMS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                items: data
            };
        }
        default: {
            return state;
        }
    }
}

const getFavItemsFeatureSate = createFeatureSelector<FavItemsState>('favItems');

export const getFavItems = createSelector(
    getFavItemsFeatureSate,
    (state: FavItemsState) => {
        return data.items;
    }
);
