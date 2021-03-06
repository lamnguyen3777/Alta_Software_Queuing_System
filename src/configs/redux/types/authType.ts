export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_SUCCESS = 'SET_SUCCESS';

export interface User {
  firstName: string;
  email: string;
  id: string;
  createdAt: any;
}
export interface AuthState {
  user: User | null;
  authenticated: boolean;
  loading: boolean;
  error: string;
  success: string;
}
export interface SignInData {
  email: string;
  password: string;
}
// Actions
interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}
interface SignOutAction {
  type: typeof SIGN_OUT;
}
interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}
interface SetSuccessAction {
  type: typeof SET_SUCCESS;
  payload: string;
}
export type AuthAction = SetUserAction | SetLoadingAction | SignOutAction | SetErrorAction | SetSuccessAction;

