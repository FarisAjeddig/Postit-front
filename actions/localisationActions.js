import {
  NEW_LOC,
  LOC_ERROR
} from '../actions/types';

//Action qui transmet au reducer la localisation de l'utilisateur, passée en argument,
//Et fetch la liste des messages autour de cette localisation
//@params avec coords de la forme { latitude, longitude }
//@return : rien
export const newLoc = (coords) => {
    return {
      type: NEW_LOC,
      payload: coords
    };
};

//=============== Demande ponctuelle de geolocalisation

//Options pour navigator.geolocation
const geoOptions = {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 4000,
  distanceFilter: 2
};
// Demande la localisation de l'utilisateur,
// dispatche NEW_LOC avec la position retournée en cas de succès,
// actualisant ainsi l'état de l'app avec la localisation de l'utilisateur
// dispatche LOC_ERROR en cas d'erreur.
// @param : rien
// @return : rien
export const getLocalisation = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        dispatch(newLoc(position.coords));
      },
      (error) => { // En cas d'echec celui ci
        console.log(error);
        dispatch({ type: LOC_ERROR });
      },
      geoOptions
    );
  };
};
