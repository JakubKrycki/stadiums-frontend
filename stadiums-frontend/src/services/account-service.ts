import axios from "axios";
import * as jose from 'jose';
import { loggedInUser } from "../stores";
import type { UserRequestDto } from "./account-types";

export const accountService = {
	baseUrl: "http://lap:3000",
	productionUrl: "https://stadiums.onrender.com",
	production: false,

	getUrl() {
		return this.production ? this.productionUrl : this.baseUrl;
	},

	async login(email: string, password: string): Promise<boolean> {
		try {
			const response = await axios.post(`${this.getUrl()}/api/users/authenticate`, { email, password });
			axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
			if (response.data.success) {
				loggedInUser.set({
					email: email,
					token: response.data.token,
					_id: response.data.id
				});
				localStorage.account = JSON.stringify({ email: email, token: response.data.token });
				return true;
			}
			return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

	async logout() {
		if (axios.defaults.headers.common["Authorization"]) {
			localStorage.removeItem("account");
		}
		loggedInUser.set({
			email: "",
			token: "",
			_id: ""
		});
		axios.defaults.headers.common["Authorization"] = "";
	},

	async signup(user: UserRequestDto): Promise<boolean> {
		try {
			await axios.post(this.getUrl() + "/api/users", user);
			return true;
		} catch (error) {
			return false;
		}
	},

	checkPageRefresh() {
		if (!axios.defaults.headers.common["Authorization"]) {
			const accountCredentials = localStorage.account;
			if (accountCredentials) {
				const savedUser = JSON.parse(accountCredentials);
				loggedInUser.set({
					email: savedUser.email,
					token: savedUser.token,
					_id: savedUser._id
				});
				axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
			}
		}
	},

	getUserRole(token: string) {
		const decoded = jose.decodeJwt(token);
		return decoded.role;
	},

	getUserEMail(token: string) {
		const decoded = jose.decodeJwt(token);
		return decoded.email;
	},

	getUserId(token: string) {
		const decoded = jose.decodeJwt(token);
		return decoded.id;
	}
};