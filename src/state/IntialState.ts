export interface State {
  isAppReady: boolean;
  test: string;
}

export const initialState: State = {
  isAppReady: false,
  test: "It works"
};
