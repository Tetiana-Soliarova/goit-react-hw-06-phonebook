import types from './contacts-types';
import { v4 as uuidv4 } from 'uuid'

const addContact = (data) => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        name: data.name,
        number: data.number,
    },
});


const deleteTodo = removeId => ({
    type: types.DELETE,
    payload: removeId
});

const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value 
})

export default { addContact, deleteTodo, changeFilter};