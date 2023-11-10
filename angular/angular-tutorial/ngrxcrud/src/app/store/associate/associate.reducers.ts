import { createReducer, on } from "@ngrx/store";
import { AssociateState } from "./associate.state";
import { addassociatesuccess, loadAssociateFail, loadAssociateSuccess } from "./associate.actions";

const _AssociateReducer = createReducer(AssociateState,
  on (loadAssociateSuccess, (state, action) => {
    return {
      ...state,
      list: [...action.list],
      errorMessage: ''
    }
  }),
  on (loadAssociateFail, (state, action) => {
    return {
      ...state,
      list: [],
      errorMessage: action.errorMessage
    }
  }),
  on(addassociatesuccess, (state, action) => {
    const _maxid=Math.max(...state.list.map(o => o.id));
    const _newdata = {...action.inputdata};
    _newdata.id = _maxid+1;
    return {
      ...state,
      list: [...state.list, _newdata],
      errorMessage: ''
    }
  }),
)

export function AssociateReducer(state: any, action: any) {
  return _AssociateReducer(state, action);
}
