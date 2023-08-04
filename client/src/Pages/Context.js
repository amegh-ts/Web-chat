import { createContext, useEffect, useReducer } from "react";

const InitiaState={
    user:JSON.parse(localStorage.getItem('user')||null)
}

export const userContext=createContext(InitiaState)

const reducer = (state,action)=>{
    switch (action.type) {
        case 'Success':
            return {user:action.payload}
        default:
            return state
    }
}

export const UserContextProvider = ({children})=>{

    const [state,dispatch]=useReducer(reducer,InitiaState)

    useEffect(()=>{
        console.log('cotext',state.user);
localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user])

    return(
        <userContext.Provider value={{user:state.user,dispatch}}>{children}</userContext.Provider>
    )

}