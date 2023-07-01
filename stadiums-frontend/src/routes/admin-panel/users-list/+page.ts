import { accountService } from "../../../services/account-service";
import { userService } from "../../../services/user-service";
export const ssr = false;

export const load = async () => {
	accountService.checkPageRefresh();

    const accountCredentials = localStorage.account;
    let token = '';
    if (accountCredentials) {
        const savedUser = JSON.parse(accountCredentials);
        token = savedUser.token;
    }
    const users = await userService.getUsers();
	return {
        token: token,
		users: users,
	};
};