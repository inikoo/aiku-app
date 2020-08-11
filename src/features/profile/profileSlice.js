import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'




export const profileSlice = createSlice({
    name: 'profile', initialState: {
      name:'Guest'
    }, reducers: {

        'updateName': (state, action) => {
            state.user.name = action.payload.name
        },
        'loginSuccess': (state, action) => {
            state.user.name = action.payload.name
        },

    }


})

export const {update} = profileSlice.actions
export default profileSlice.reducer
export const selectName = state => state.profile.name

