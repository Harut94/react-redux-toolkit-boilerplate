class Errors {
	constructor(error, store) {
		this.error = error;
		this.store = store;
		this.errorTypes = {
			404: this.notFound,
		};
	}

	handleErrorType(error) {
		this.errorTypes[error.status](error);
	}

	errorHandler() {
		this.handleErrorType(this.error);
	}

	notFound() {
		return 'not found';
	}
}

export default Errors;
