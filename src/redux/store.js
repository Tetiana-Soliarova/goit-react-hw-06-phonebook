import { createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import contactReducer from './contacts/contacts-reducer'



const initialState = combineReducers({
    
    contacts: contactReducer,
   
})

const store = createStore(initialState, composeWithDevTools());

export default store;