import {createStore} from 'redux';
import {CHANGE_PAGE, ActionCreator, changePage} from './actions';

const initialPage = {
  page: 'home',
};

export const changePageReducer = (
  state = initialPage,
  action: ActionCreator
) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        page: action.page,
      };
    default:
      return state;
  }
};

export const store = createStore(changePageReducer);