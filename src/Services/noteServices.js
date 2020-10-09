
import axiosServices from "./axiosService";
let Config =  require("../Configration/config");
//const take = require('./')
const axiosService = new axiosServices();
const configUrl = Config.url;
const token = localStorage.getItem('token');

// const token = {headers : {
//     'Content-Type': 'application/json',
//     'Authorization': localStorage.getItem('token')
//   }}

export default class noteServices {

     
	CreateNote(data) {
        console.log("token :", token);
		let url = configUrl + 'notes/addNotes';
		//axiosService.post
		return axiosService.post(url, data, { headers: {
            authorization: token
          }});
	}

	getNotes() {
		let url = configUrl + 'notes/getNotesList';
		return axiosService.get(url, { headers: {
            authorization: token
          }});
	}

}