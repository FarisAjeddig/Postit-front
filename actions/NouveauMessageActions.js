import axios from 'axios';
import { POST_MSG_SUCCESS, POST_MSG_FAIL, POST_MSG_TRY, MSG_CHANGE, TAG_CHANGE } from './types';
import { apiRootUrl } from '../Config';

export const envoyer = ({ contenu, categorie, longitude, latitude }) => {
  return (dispatch) => {
    dispatch({ type: POST_MSG_TRY });
    axios.post(`${apiRootUrl}posts/`, {
      id_user: '595503eac27fec21bc4fb91f',
      long: longitude,
      lat: latitude,
      tag: categorie,
      contenu
    }).then((response) => {
      console.log(response);
      dispatch({
        type: POST_MSG_SUCCESS
      });
    }).catch((error) => {
      console.log(error);
      dispatch({
        type: POST_MSG_FAIL
      });
    });
 };
};

export const onMsgChanged = (text) => ({
    type: MSG_CHANGE,
    payload: text
  });

export const onTagChanged = (text) => {
  return {
    type: TAG_CHANGE,
    payload: text
  };
};
