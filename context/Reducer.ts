import { Action, ActionType, GlobalStateType } from '../src/types/types';

const reducer = (state: GlobalStateType, action: Action): GlobalStateType => {
  switch (action.type) {
    case ActionType.UPDATE_MODAL:
      return {
        ...state,
        activeModal: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
