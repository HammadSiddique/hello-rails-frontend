import axios from 'axios';

const GET_MESSAGE = 'greetings/messages'

const getMessage = (message) => ({
    type: GET_MESSAGE,
    payload: message
});

const fetchMessage = async() => {
    await axios.get('http://localhost:3000/').then((response)=> {
        return response.data.greeting 
    })
};

export default function greetingsReducer(state = [], action ={}) {
    switch(action.type){
        case GET_MESSAGE:
            return action.payload
        default:
            return state;
    }
}

export { getMessage, fetchMessage };