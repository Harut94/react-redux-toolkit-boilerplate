import axios from 'axios';
import qs from 'qs';
import constants from '../settings/constants';

class RequestService {
	constructor() {
		this.source = null;
	}

	get = (url, options) => {
		options = options || {};
		return this.makeAPIRequest(url, options, 'GET');
	};

	post = (url, options) => {
		options = options || {};
		return this.makeAPIRequest(url, options, 'POST');
	};

	put = (url, options) => {
		options = options || {};
		return this.makeAPIRequest(url, options, 'PUT');
	};

	delete = (url, options) => {
		options = options || {};
		return this.makeAPIRequest(url, options, 'DELETE');
	};

	patch = (url, options) => {
		options = options || {};
		return this.makeAPIRequest(url, options, 'PATCH');
	};

	createUrl = (arg) => {
		if (Array.isArray(arg)) {
			return [constants.API_URL, ...arg].join('/');
		}
		return arg;
	};

	makeAPIRequest = (url, options = {}, method) => {
		return new Promise((resolve, reject) => {
			if (this.source) {
				this.source.cancel();
			}

			if (!url) {
				return reject('INVALID_REQUEST_PARAMS');
			}

			this.source = axios.CancelToken.source();

			let _url = this.createUrl(url);

			let fetch_options = {
				url: _url,
				method,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'Access-Control-Allow-Methods': '*',
					version: 1,
					...options,
				},
				cancelToken: this.source.token,
				data: options.body || {},
				params: options.queryParams || '',
				paramsSerializer: (params) => qs.stringify(params),
				timeout: options?.timeout ?? 10000,
			};

			if (options.headers) {
				fetch_options.headers = options.headers;
			}

			axios(fetch_options)
				.then(async (response) => {
					if (!response) {
						return reject('INVALID_RESPONSE_DATA');
					}

					let { data } = response;

					return resolve(data);
				})
				.catch((err) => {
					err = JSON.parse(JSON.stringify(err));
					if (err.message !== 'The user aborted a request.') {
						// let check_result = await this._validation_service.validate(data);
						return reject(err);
					}
				});
		});
	};
}

export default new RequestService();
