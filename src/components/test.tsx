import React, {useEffect} from "react";
import {useStateValue} from '../state/StateContext';
import {Fetcher} from "../services/Fetcher";
import {Action, ActionType} from "../state/Action";
import {MainActions} from "../state/actions/MainActions";


const Test = () => {
  const [{ test, isAppReady }, dispatch]: any = useStateValue();

  const testingApi = async () => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        console.log(await Fetcher.api('/api/test'));
        resolve();
      }, 1000);
    });
  };

  const onLoad = () => {
    testingApi().then(() => {
      const action: Action = {
        type: ActionType.MAIN,
        action: MainActions.SET_APP_READY,
        payload: true
      };

      dispatch(action);
    });
  };

  useEffect(onLoad, []);

  return isAppReady
      ? <p>{test}</p>
      : null
};

export default Test;
