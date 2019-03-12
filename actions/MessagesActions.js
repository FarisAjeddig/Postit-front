//Libraries Imports
import axios from 'axios';

//Custom Imports
import { apiRootUrl } from '../Config';
import {
  LIST_REQ_SUCCESS,
  LIST_REQ_ERROR,
} from './types';

/*nom : getMessages
*desc : Requiert de l'api la liste des message dans un rayon donné autour de l'utilisateur
et transmet cette liste au reducer via LIST_REQ_SUCCESS, ou dispatch LIST_REQ_ERROR
*@param : le couple de coordonnée de l'utilisateur { latitude, longitude }
*@return : rien
*/
export const getMessages = ({ latitude, longitude }) => {
  return (dispatch) => {
    axios.get(`${apiRootUrl}posts/${longitude}/${latitude}/2000`)
    .then((response) => {
      console.log(response);
      dispatch({
        type: LIST_REQ_SUCCESS,
        payload: response.data
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LIST_REQ_ERROR
      });
    });
  };
};
