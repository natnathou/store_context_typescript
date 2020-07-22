import React, {Reducer, createContext, useContext, useReducer} from 'react';
import { State } from "./IntialState";

interface Provider {
    reducer: Reducer<any, any>;
    initialState: State;
    children?: any;
}

export const StateContext = createContext({});
export const StateProvider = ({reducer, initialState, children}: Provider) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
