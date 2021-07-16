import { createSlice, createSelector } from '@reduxjs/toolkit';
import { signInAction } from './auth-async-actions';

const initialState = {
	token: '',
};

const moduleName = 'auth';
const stateSelector = (state) => state[moduleName];

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

export const tokenSelector = createSelector(stateSelector, (state) => state.token);

export const { test } = authSlice.actions;

export default authSlice.reducer;
