import {MainActions} from "./actions/MainActions";

export enum ActionType {
  MAIN,
}

export interface Action {
  type: ActionType;
  action: MainActions;
  payload: any;
}
