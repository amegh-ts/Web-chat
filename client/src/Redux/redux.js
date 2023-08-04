import {createSlice} from '@reduxjs/toolkit'

const user=createSlice(
    {
        name:'loginuser',
        initialState:{
            userData:[]
        },
        reducers:{
            addtoUser:(state,action)=>{
                state.userData.push(action.payload)
            },
            logoutUser:(state)=>{
                state.userData=[]
            }
        }
    }
)

export const {addtoUser,logoutUser} =user.actions
export default user.reducer