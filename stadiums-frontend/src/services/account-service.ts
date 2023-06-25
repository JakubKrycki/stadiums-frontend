import axios from "axios";
import { loggedInUser } from "../stores";
import type { UserRequestDto } from "./account-types";

export const accountService = {
	baseUrl: "http://localhost:3000",
	productionUrl: "https://stadiums.onrender.com",

	async login(email: string, password: string): Promise<boolean> {
		try {
			const response = await axios.post(`${this.productionUrl}/api/users/authenticate`, { email, password });
			axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
			if (response.data.success) {
				loggedInUser.set({
					email: email,
					token: response.data.token,
					_id: response.data.id
				});
				localStorage.donation = JSON.stringify({ email: email, token: response.data.token });
				return true;
			}
			return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

	async logout() {
		loggedInUser.set({
			email: "",
			token: "",
			_id: ""
		});
		axios.defaults.headers.common["Authorization"] = "";
		localStorage.removeItem("donation");
	},

	async signup(user: UserRequestDto): Promise<boolean> {
		try {
			await axios.post(this.productionUrl + "/api/users", user);
			return true;
		} catch (error) {
			return false;
		}
	},

	getUsername() {
		return localStorage.getItem("username");
	},
};