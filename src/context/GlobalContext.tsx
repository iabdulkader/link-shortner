import { createContext, ReactNode, useContext, useReducer } from 'react';
import { ActionType, GlobalStateType, LinkType } from '../types/types';
import reducer from './Reducer';

const initialState: GlobalStateType = {
  activeModal: null,
  links: [],
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

  function addLinks(links: GlobalStateType['links']) {
    dispatch({
      type: ActionType.ADD_LINKS,
      payload: links,
    });
  }

  function addLink(link: LinkType) {
    dispatch({
      type: ActionType.ADD_LINK,
      payload: link,
    });
  }

  function deleteLink(slug: string) {
    dispatch({
      type: ActionType.DELETE_LINK,
      payload: slug,
    });
  }

  const value = {
    activeModal: state.activeModal,
    updateModal,
    links: state.links,
    addLinks,
    addLink,
    deleteLink,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
