export interface GlobalStateType {
  activeModal: 'signin' | 'signup' | null;
  links: LinkType[];
  updateModal?: (modal: GlobalStateType['activeModal']) => void;
  addLinks?: (links: LinkType[]) => void;
  addLink?: (link: LinkType) => void;
  deleteLink?: (slug: string) => void;
}

export type Action =
  | {
      type: ActionType.UPDATE_MODAL;
      payload: GlobalStateType['activeModal'];
    }
  | {
      type: ActionType.ADD_LINKS;
      payload: LinkType[];
    }
  | {
      type: ActionType.ADD_LINK;
      payload: LinkType;
    }
  | {
      type: ActionType.DELETE_LINK;
      payload: string;
    };

export enum ActionType {
  UPDATE_MODAL = 'UPDATE_MODAL',
  ADD_LINK = 'ADD_LINK',
  ADD_LINKS = 'ADD_LINKS',
  DELETE_LINK = 'DELETE_LINK',
}

export interface LinkType {
  id?: string;
  url: string;
  slug: string;
  createdA?: Date;
  updatedAt?: Date;
}
