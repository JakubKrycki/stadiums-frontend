import { accountService } from "../../services/account-service";
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
	};
};