import type { ErrorResponse } from "../error.model";
import type { User } from "./user.model";

export interface RegisterApiOK {
	access_token: string;
	user: User;
}

export type RegisterApiResponse = RegisterApiOK & Partial<ErrorResponse>;
