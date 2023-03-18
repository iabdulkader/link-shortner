import { createContext, ReactNode, useContext, useReducer } from 'react';
import { ActionType, GlobalStateType } from '../src/types/types';
import reducer from './Reducer';

const initialState: GlobalStateType = {
  activeModal: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function updateModal(modal: GlobalStateType['activeModal']) {
    dispatch({
      type: ActionType.UPDATE_MODAL,
      payload: modal,
    });
  }

  const value = {
    activeModal: state.activeModal,
    updateModal,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
