import React from 'react';

const CTX = React.createContext();

export { CTX };

export function reducer(state, action) {
  const { page } = action.payload;

  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        page
      };

    default:
      throw Error('reducer error');
      break;
  }
}

export default function Store(props) {
  const stateHook = React.useReducer(reducer, {
    page: 0
  });

  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}
