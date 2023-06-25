import { writable } from "svelte/store";
import type { LoggedInUser } from "./services/account-types";

export const loggedInUser = writable<LoggedInUser>();