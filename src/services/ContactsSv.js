import axios from "axios";

export class ContactsSv {
    static serverURL = `http://localhost:2409`;

    static getAllInfo() {
        let dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }
    static getInfoId(contactsId) {
        let dataURL = `${this.serverURL}/contacts/${contactsId}`;
        return axios.get(dataURL, contactsId);
    }
    static createInfoId(contact) {
        let dataURL = `${this.serverURL}/contacts/`;
        return axios.post(dataURL, contact);
    }
    static createContactsId(contact, contactId) {
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.put(dataURL, contact);
    }
    static deleteInfoId(contactId) {
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.delete(dataURL);
    }

    static getAllGroup() {
        let dataURL = `${this.serverURL}/groups`;
        return axios.get(dataURL);
    }
    static getGroup(contact) {
        let groupId = contact.groupId;
        let dataURL = `${this.serverURL}/groups/${groupId}`;
        return axios.get(dataURL);
    }
}