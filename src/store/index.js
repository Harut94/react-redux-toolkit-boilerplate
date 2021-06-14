import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';
import responseErrorHandle from 'middleware/axiosInterseptor';

// eslint-disable-next-line no-unused-vars
((_) => {
	responseErrorHandle();
})();

const store = configureStore({
	reducer: rootReducer,
});

export default store;
