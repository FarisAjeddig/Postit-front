import { combineReducers } from 'redux';

import LocalisationReducer from './LocalisationReducer';
import MessagesReducer from './MessagesReducer';
import NouveauMessageReducer from './NouveauMessageReducer';


export default function getRootReducer() {
  return combineReducers({
    localisation: LocalisationReducer,
    messages: MessagesReducer,
    form: NouveauMessageReducer
  });
}
