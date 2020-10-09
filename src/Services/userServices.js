
import axiosServices from "./axiosService";
let Config =  require("../Configration/config");
//const take = require('./')
const axiosService = new axiosServices();
const configUrl = Config.url;
const token = localStorage.getItem('token');

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

	resetPassword(data) {
		var headers={}  
        
		let url='http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password'.concat(`?access_token=${token}`);
		//let url = configUrl + 'user/reset-password/?access_token='+token;
		console.log('url = ', url);
		return axiosService.post(url, data, true,headers);
	}

}