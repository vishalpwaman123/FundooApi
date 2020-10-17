
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
		return axiosService.post(url, data, true , { headers: {
            Authorization: token
          }});
	}

	getNotes() {
		let url = configUrl + 'notes/getNotesList';
		return axiosService.get(url, { headers: {
            Authorization: token
          }});
	}

	NoteUpdate(data) {
		let url = configUrl + 'notes/updateNotes';
		return axiosService.post(url, data, true, { headers: {
            Authorization: token
          }} )
	}

	DeleteNotes(data) {
		let url = configUrl + 'notes/trashNotes';
		console.log(url);
		return axiosService.post(url, data, true, { headers: {
            Authorization: token
          }} )
	}
	changeColor(Data) {
		let url = configUrl + 'notes/changesColorNotes';
		console.log(url);
		return axiosService.post(url, Data, true, { headers: {
            Authorization: token
          }})
	}

	ArchiveNotes(Data) {
		let url = configUrl + 'notes/archiveNotes';
		console.log(url);
		return axiosService.post(url, Data, true, { headers: {
            Authorization: token
          }})
	}

}