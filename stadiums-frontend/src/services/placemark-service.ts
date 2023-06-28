import axios from "axios";
import { loggedInUser } from "../stores"
import { accountService } from "./account-service"
import type { Placemark, PlacemarkPlus } from "./placemark-types";

export const placemarkService = {
    
    baseUrl: "http://lap:3000",
	productionUrl: "https://stadiums.onrender.com",
	production: true,

	getUrl() {
		return this.production ? this.productionUrl : this.baseUrl;
	},

    async getPlacemarksByUser(token: string) {
        const userId = accountService.getUserId(token);
        const response = await axios.get(`${this.getUrl()}/api/users/${userId}/placemarks`);
        return response.data;
    },

    async getAllPlacemarksVisibleForUser(token: string) {
        const userId = accountService.getUserId(token);
        const response = await axios.get(`${this.getUrl()}/api/placemarks/user/${userId}`);
        return response.data;
    },

    async getPlacemarksByAdmin() {
        loggedInUser.subscribe((data) => console.log(data));
    },

    async createPlacemark(placemark: Placemark) {
        try {
			await axios.post(`${this.getUrl()}/api/placemarks`, placemark);
			return true;
		} catch (error) {
			return false;
		}
    },
    
    async updatePlacemark(placemark: PlacemarkPlus) {
        try {
			await axios.put(`${this.getUrl()}/api/placemarks/${placemark._id}`, placemark);
			return true;
		} catch (error) {
			return false;
		}
    },

}