import axios from "axios";
import type { Placemark, PlacemarkPlus, PlacemarkReadable } from "./placemark-types";
import { getUrl } from "$lib/consts";
import { getUserId } from "./user-utils";

const apiKey = "934481b1a6ec04ee4aa6ac91745488a6";

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
			const response = await axios.delete(`${getUrl()}/api/placemarks/${id}`);
			return response.status == 204;
		} catch (error) {
			console.log(error);
			return false;
		}
    },

    async uploadImage(id: string, image_url: string) {
        try {
            const response = await axios.post(`${getUrl()}/api/placemarks/${id}/images`, { image_url });
            return response.status === 200;
        } catch (error) {
            console.log(error);
			return false;
        }
    },

    async getImages(id: string) {
        try {
            const response = await axios.get(`${getUrl()}/api/placemarks/${id}/images`);
            return response.data;
        } catch (error) {
            console.log(error);
			return false;
        }
    },

    async deleteImage(placemarkId: string, imageId: string) {
        try {
			const response = await axios.delete(`${getUrl()}/api/placemarks/${placemarkId}/images/${imageId}`);
			return response.status == 204;
		} catch (error) {
			console.log(error);
			return false;
		}
    },

    async getConditions(lat: number, lng: number) {
        const weatherInfo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`
        let weather = {};
        await fetch(weatherInfo, {
            mode: 'cors'
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            weather = {
                weatherText: data.current.weather[0].main,
                temperature: data.current.temp
            }
        });
        return weather;
    }
}