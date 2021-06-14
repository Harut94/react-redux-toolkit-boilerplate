import { createAsyncThunk } from '@reduxjs/toolkit';
import requestService from 'services/request-service';

export const signInAction = createAsyncThunk(
	'auth/signIn',
	// eslint-disable-next-line no-unused-vars
	async (user, thunkAPI) => {
		const response = await requestService.get('https://estatetest.ameriabank.am/v2/Locationss');
		return response;
	}
);
