import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";



function reducer (state,action){
    if (action.type === "Addname"){
        return addName(state, action)
    }
    return state;
}
function addName (state,action){
    return {
        ...state,
        users: state.users.concat([action.name]),
    }
}

export const initialState = {
    users:  ["ori","Roni"]
};



export const store =createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
);
console.log ("store",store);
