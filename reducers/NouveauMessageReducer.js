import {
  POST_MSG_SUCCESS,
  POST_MSG_FAIL,
  POST_MSG_TRY,
  MSG_CHANGE,
  TAG_CHANGE
} from '../actions/types';

const INIT_STATE = {
  contenu: '',
  categorie: '',
  loading: false,
  error: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case MSG_CHANGE:
      return { ...state, contenu: action.payload };
    case TAG_CHANGE:
      return { ...state, categorie: action.payload };
    case POST_MSG_TRY:
      return { ...state, loading: true };
    case POST_MSG_FAIL:
      return { ...state, loading: false, error: true };
    case POST_MSG_SUCCESS:
      return INIT_STATE;
    default:
      return state;
  }
};
