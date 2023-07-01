import { writable } from "svelte/store";
import type { LoggedInUser } from "./services/account-types";
import type { MarkerSpec } from "./services/markers";

export const loggedInUser = writable<LoggedInUser>();
export const markerSelected = writable<MarkerSpec>();