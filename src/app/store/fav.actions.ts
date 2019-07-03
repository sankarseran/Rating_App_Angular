import { Action } from '@ngrx/store';

export enum FavItemsActionTypes {
    LOAD_FAVITEMS = '[favItems] Load favItems',
}


export class LoadFavItems implements Action {
    readonly type = FavItemsActionTypes.LOAD_FAVITEMS;

    constructor() { }
}

export type Action = LoadFavItems;
