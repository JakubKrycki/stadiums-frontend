import axios from "axios";
import type { Placemark, PlacemarkPlus, PlacemarkReadable } from "./placemark-types";
import { getUrl } from "$lib/consts";
import { getUserId } from "./user-utils";

export const placemarkService = {

    async getPlacemarksByUser(token: string) {
        const userId = getUserId(token);
        const response = await axios.get(`${getUrl()}/api/users/${userId}/placemarks`);
        return response.data;
    },

    async getAllPlacemarksVisibleForUser(token: string): Promise<PlacemarkReadable[]> {
        const userId = getUserId(token);
        const response = await axios.get(`${getUrl()}/api/placemarks/user/${userId}`);
        return response.data;
    },

    async getPlacemarks() {
        try {
			const response = await axios.get(`${getUrl()}/api/placemarks`);
			return response.data;
		} catch (error) {
			console.log(error);
			return [];
		}
    },

    async createPlacemark(placemark: Placemark) {
        try {
			await axios.post(`${getUrl()}/api/placemarks`, placemark);
			return true;
		} catch (error) {
			return false;
		}
    },
    
    async updatePlacemark(placemark: PlacemarkPlus) {
        try {
			await axios.put(`${getUrl()}/api/placemarks/${placemark._id}`, placemark);
			return true;
		} catch (error) {
			return false;
		}
    },

    async deletePlacemark(id: string) {
        try {
			const response = await axios.delete(`${getUrl()}/api/placemark/${id}`);
			return response.status == 204;
		} catch (error) {
			console.log(error);
			return false;
		}
    },

}