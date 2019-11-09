export interface ActionCreator {
  readonly type: string;
  [key: string]: string;
} 

export const CHANGE_PAGE = 'CHANGE_PAGE';

export const changePage = (page: string): ActionCreator => ({
  type: CHANGE_PAGE,
  page,
});