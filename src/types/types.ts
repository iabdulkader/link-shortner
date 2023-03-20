export interface GlobalStateType {
  activeModal: 'signin' | 'signup' | null;
  updateModal?: (modal: GlobalStateType['activeModal']) => void;
}

export type Action = {
  type: ActionType.UPDATE_MODAL;
  payload: GlobalStateType['activeModal'];
};

export enum ActionType {
  UPDATE_MODAL = 'UPDATE_MODAL',
}
