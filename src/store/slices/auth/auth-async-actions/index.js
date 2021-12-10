import { createAsyncThunk } from '@reduxjs/toolkit';
import requestService from 'services/request-service';
import constants from 'services/settings/constants';

export const signInAction = createAsyncThunk(
	'auth/signIn',
	// eslint-disable-next-line no-unused-vars
	async (user, thunkAPI) => {
		const url = [constants.request_url.bookmaker, constants.request_url.all];

		const response = await requestService.get(url);
		return response;
	}
);
