import { Action, ActionType, GlobalStateType } from '../types/types';

const reducer = (state: GlobalStateType, action: Action): GlobalStateType => {
  switch (action.type) {
    case ActionType.UPDATE_MODAL:
      return {
        ...state,
        activeModal: action.payload,
      };

    case ActionType.ADD_LINKS:
      return {
        ...state,
        links: action.payload,
      };

    case ActionType.ADD_LINK:
      return {
        ...state,
        links: [action.payload, ...state.links],
      };

    case ActionType.DELETE_LINK:
      return {
        ...state,
        links: state.links.filter((link) => link.slug !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
