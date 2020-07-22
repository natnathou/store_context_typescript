import { State } from "./IntialState";
import {MainReducer} from "./reducers/MainReducer";
import {Action, ActionType} from "./Action";


export const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.MAIN: return MainReducer.reduce(state, action);
    default: return { ...state };
  }
};
