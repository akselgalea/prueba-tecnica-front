export interface User {
	id?: string;
	username: string;
	name: string;
	roles: Role[];
	email: string;
}

export interface Role {
	id: number;
	name: string;
}
