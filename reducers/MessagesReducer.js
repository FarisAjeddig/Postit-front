import {
  LIST_REQ_SUCCESS,
  LIST_REQ_ERROR
} from '../actions/types';
// On définit l'état par default.
const INIT_STATE = {
  liste: [],
  loading: true,
  error: false
};
/*desc : L'objectif de cette fonction est de renvoyer dans l'état la liste des messages alentours
*@param : un état, et une action
*@return : les messages autour de l'utilisateur si on a réussit à les recupérer
*/
export default (state = INIT_STATE, action) => {
  switch (action.type) { // Si LIST_REQ, on retourne une liste vite
    case LIST_REQ_SUCCESS:// Si action.type="LIST_REQ_SUCCESS" on retourne la liste payload.
    return { liste: action.payload, loading: false, error: false };
    case LIST_REQ_ERROR:// Si "LIST_REQ_ERROR" on retourne "error:true"
    return { ...state, error: true };
    default:// Sinon, on retourne l'etat précédent.
    return state;
  }
};
