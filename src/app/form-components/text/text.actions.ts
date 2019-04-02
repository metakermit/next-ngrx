import { Action } from '@ngrx/store';

export enum ActionTypes {
  Write = '[Text Component] Write'
}

export class Write implements Action {
  readonly type = ActionTypes.Write;

  constructor(public payload: { text: string }) {}
}
