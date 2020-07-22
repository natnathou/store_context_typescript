import { State } from '../IntialState';
import {MainActions} from "../actions/MainActions";
import {Action} from "../Action";


export class MainReducer {
  public static reduce (state: State, action: Action): State {
    switch (action.action) {
      case MainActions.SET_APP_READY: return MainReducer.setAppReady(state, action);
      default: return { ...state };
    }
  }

  private static setAppReady (state: State, action: Action): State {
    const payload: boolean = action.payload;

    return {
      ...state,
      isAppReady: payload
    };
  }
}
