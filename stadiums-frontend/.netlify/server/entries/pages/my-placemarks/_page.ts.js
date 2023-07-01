import { l as loggedInUser, a as accountService } from "../../../chunks/account-service.js";
import axios from "axios";
const placemarkService = {
  baseUrl: "http://lap:3000",
  productionUrl: "https://stadiums.onrender.com",
  production: false,
  getUrl() {
    return this.production ? this.productionUrl : this.baseUrl;
  },
  getPlacemarksByUser() {
    let placemarks = [];
    loggedInUser.subscribe(async (data) => {
      const userId = accountService.getUserId(data.token);
      const response = await axios.get(`${this.getUrl()}/api/users/${userId}/placemarks`);
      placemarks = response.data;
      return response.data;
    });
    return placemarks;
  },
  async getPlacemarksByAdmin() {
    loggedInUser.subscribe((data) => console.log(data));
  }
};
const ssr = false;
const load = async ({ params }) => {
  accountService.checkPageRefresh();
  const placemarks = placemarkService.getPlacemarksByUser();
  return {
    placemarks
  };
};
export {
  load,
  ssr
};
