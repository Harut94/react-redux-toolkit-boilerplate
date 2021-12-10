import { toast } from 'react-toastify';

class Errors {
	constructor(error, store) {
		this.error = error;
		this.store = store;
	}

	handleErrorType(errorStatus) {
		switch (errorStatus) {
			case 404:
				return 'not found';
			case 401:
				return 'unauthorized';
			default:
				return 'sorry something went wrong';
		}
	}

	errorHandler() {
		let errorMessage = this.error.message;
		if (!this.error.message) {
			const _error = this.handleErrorType(this.error.status);
			errorMessage = `${this.error.status} ${_error}`;
		}
		toast.error(errorMessage);
	}
}

export default Errors;
