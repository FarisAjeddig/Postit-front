import {
  NEW_LOC,
  LOC_ERROR
} from '../actions/types';
// On initialise l'etat que le reducer prend par default
const INIT_STATE = {
  latitude: null,
  longitude: null,
  loading: true,
  error: false
};
/*nom : LocReducer
*desc : L'objectif de cette fonction est de mettre à jour la localisation de l'utilisateur
*@param : l'état actuel, et une action
(le reducer est automatiquement applé par redux lorsqu'une action est réalisée)
*@return : l'état actuel des infos que l'on a sur la localisation de l'utilisateur
*/
export default (state = INIT_STATE, action) => {
   switch (action.type) {
     case NEW_LOC:
     //si NEW_LOC on renvoie l'état contenant les coordonées recues dans action.payload,
     // on passe loading et error à false et on set le watcher si besoin.
        return {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          loading: false,
          error: false
        };
      case LOC_ERROR://si LOC_ERROR on passe error à true, loading à false
        return { ...state, error: true, loading: false };
     default:// Sinon, on ne modifie pas l'état actuel.
      return state;
   }
};
