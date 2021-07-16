import { toast } from 'react-toastify';

class Errors {
	constructor(error, store) {
		this.error = error;
		this.store = store;
		this.errorTypes = {
			404: this.notFound,
			401: this.unauthorized,
		};
	}

	handleErrorType(error) {
		const _error = this.errorTypes[error.status](error);
		const errorMessage = `${error.status} ${_error}`;
		toast.error(errorMessage, { toastId: Math.random() });
	}

	errorHandler() {
		this.handleErrorType(this.error);
	}

	notFound() {
		return 'not found';
	}

	unauthorized() {
		return 'unauthorized';
	}
}

export default Errors;
