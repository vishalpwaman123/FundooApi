
import axiosServices from "./axiosService";
let Config =  require("../Configration/config");
//const take = require('./')
const axiosService = new axiosServices();
const configUrl = Config.url;

export default class userServices {

	registration(data) {
		let url = configUrl + 'user/userSignUp';
		//axiosService.post
		return axiosService.post(url, data, false);
	}

	login(data) {
		
		let url = configUrl + 'user/login';
		return axiosService.post(url, data, false);
	}

	forget(data) {

		let url = configUrl + 'user/reset';
		return axiosService.post(url, data, false);
	}

}