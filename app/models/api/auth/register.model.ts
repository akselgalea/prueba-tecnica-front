import type { ErrorResponse } from "../error.model";
import type { User } from "./user.model";

export interface SignInApiOK {
	access_token: string;
	user: User;
}

export type SignInApiResponse = SignInApiOK & Partial<ErrorResponse>;
