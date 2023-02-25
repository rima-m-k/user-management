import {configureStore, createSlice} from '@reduxjs/toolkit' 

const currentUserSlice= createSlice ({
    name:"user details",
    initialState:null,
    reducers : {
        addUser : (state,actions) => {
            return actions.payload 
        },
        addProfileImg(state,action){
            return {
                ...state,
                image:action.payload
            }
        },
        logout(state,action){
            return null
        }
        
    }
})

const store = configureStore ({
reducer : {
currentUser: currentUserSlice.reducer
}
})

export default store;
export const {addUser , addProfileImg , logout} = currentUserSlice.actions

