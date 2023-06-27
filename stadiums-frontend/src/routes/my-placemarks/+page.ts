import { accountService } from "../../services/account-service";
import { placemarkService } from "../../services/placemark-service";
export const ssr = false;

export const load = async () => {
	accountService.checkPageRefresh();

    const accountCredentials = localStorage.account;
    let token = '';
    if (accountCredentials) {
        const savedUser = JSON.parse(accountCredentials);
        token = savedUser.token;
    }

	return {
        token: token,
		placemarks: placemarkService.getPlacemarksByUser(token),
	};
};