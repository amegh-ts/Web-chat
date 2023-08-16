import { createContext, useEffect, useReducer } from "react";

const Initialstate={
    message:null
}

export const messageContext=createContext(Initialstate)

const reducer = (state,action)=>{
    switch (action.type) {
        case "Success":
            return {message:action.payload}
    default:
            state;
    }
}

export const MessageContextProvider =({children})=>{
    const [state,dispatch]=useReducer(reducer,Initialstate)

}