import { createSlice } from '@reduxjs/toolkit';
import { signInAction } from './auth-async-actions';

const initialState = {
	token: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		test: (state, action) => {
			state.token = action.payload.token;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signInAction.fulfilled, (state, data) => {
			state.token = data.payload;
		});
	},
});

export const { test } = authSlice.actions;

export default authSlice.reducer;
