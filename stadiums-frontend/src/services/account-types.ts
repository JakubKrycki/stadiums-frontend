export interface User {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	_id: string;
}

export interface UserRequestDto {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface LoggedInUser {
	email: string;
	token: string;
	_id: string;
}