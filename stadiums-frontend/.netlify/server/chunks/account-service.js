import axios from "axios";
import * as jose from "jose";
import { w as writable } from "./index.js";
const loggedInUser = writable();
const accountService = {
  baseUrl: "http://lap:3000",
  productionUrl: "https://stadiums.onrender.com",
  production: false,
  getUrl() {
    return this.production ? this.productionUrl : this.baseUrl;
  },
  async login(email, password) {
    try {
      const response = await axios.post(`${this.getUrl()}/api/users/authenticate`, { email, password });
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        loggedInUser.set({
          email,
          token: response.data.token,
          _id: response.data.id
        });
        localStorage.account = JSON.stringify({ email, token: response.data.token });
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
    localStorage.removeItem("account");
  },
  async signup(user) {
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
  getUserRole(token) {
    const decoded = jose.decodeJwt(token);
    return decoded.role;
  },
  getUserEMail(token) {
    const decoded = jose.decodeJwt(token);
    return decoded.email;
  },
  getUserId(token) {
    const decoded = jose.decodeJwt(token);
    return decoded.id;
  }
};
export {
  accountService as a,
  loggedInUser as l
};
