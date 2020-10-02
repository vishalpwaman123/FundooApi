//import axios from 'axios';
const axios = require('axios').default;


export default class axiosService {

	post(url, data, isRequiredHeader) {
		return axios.post(url, data, isRequiredHeader);

	}


	get(url, isRequiredHeader) {
		return axios.get(url, isRequiredHeader);

	}

}