import axios from 'axios';
import store from '../store';
import Errors from '../services/errors';

const responseErrorHandle = () => {
	const handleError = (error) => {
		// check for errorHandle config
		if (error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false) {
			return Promise.reject(error);
		}

		// if has response show the error
		if (error.response) {
			const errors = new Errors(error.response, store);
			errors.errorHandler();
		}
	};

	axios.interceptors.response.use((response) => response, handleError);
};

export default responseErrorHandle;
