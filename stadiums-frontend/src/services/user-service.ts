import { getUrl } from "$lib/consts";
import axios from "axios";

export const userService = {

    async getUsers() {
		try {
			const response = await axios.get(`${getUrl()}/api/users`);
			return response.data;
		} catch (error) {
			console.log(error);
			return [];
		}
	},

    async deleteUser(id: string) {
        try {
			const response = await axios.delete(`${getUrl()}/api/users/${id}`);
			return response.status == 204;
		} catch (error) {
			console.log(error);
			return false;
		}
    }
}