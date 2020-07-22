import React from 'react';
import { StateProvider } from "./state/StateContext";
import { stateReducer } from "./state/StateReducer";
import { initialState } from "./state/IntialState";
import { Test } from "./components/test";


const App: React.FC = () => {
  return (
      <StateProvider reducer={stateReducer} initialState={initialState}>
        <Test />
      </StateProvider>
  );
};

export default App;
