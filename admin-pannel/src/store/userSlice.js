import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
  }
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetail :(state , action)=>{
            state.user = action.payload
            console.log(action.payload)

        }
     
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {setUserDetail}  = userSlice.actions
  
  export default userSlice.reducer