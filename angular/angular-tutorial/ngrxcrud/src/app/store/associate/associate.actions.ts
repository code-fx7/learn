import { createAction, props } from "@ngrx/store";
import { Associates } from "../model/associate.model";

export const LOAD_ASSOCIATE = '[associate page] load associate'
export const LOAD_ASSOCIATE_SUCCESS = '[associate page] load associate success'
export const LOAD_ASSOCIATE_FAIL = '[associate page] load associate fail'
export const ADD_ASSOCIATE = '[associate page] add associate'
export const ADD_ASSOCIATE_SUCCESS = '[associate page] add associate success'

export const loadAssociate = createAction(LOAD_ASSOCIATE)
export const loadAssociateSuccess = createAction(LOAD_ASSOCIATE_SUCCESS, props<{list: Associates[]}>())
export const loadAssociateFail = createAction(LOAD_ASSOCIATE_FAIL, props<{errorMessage: string}>())

export const addassociate = createAction(ADD_ASSOCIATE, props<{inputdata: Associates}>())
export const addassociatesuccess = createAction(ADD_ASSOCIATE_SUCCESS, props<{inputdata: Associates}>())
