"use server";

import { z } from "zod";
import { API_URL } from "@/app/constants";
import { HttpMethods, useFetch } from "@/app/utils/fetch";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { SignInApiResponse } from "@/app/models/api/auth/signin.model";
import { routeConst } from "@/app/constants/routes.const";

const SignInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(4),
});

const validateSignIn = (input: unknown) => {
	return SignInSchema.strict().safeParse(input);
};

export async function signIn(values: unknown) {
	const { success, error, data } = validateSignIn(values);

	if (!success) {
		return {
			errors: error.flatten().fieldErrors,
			message: "Invalid user credentials",
		};
	}

	try {
		const response = await useFetch<SignInApiResponse>(
			`${API_URL}/auth/login`,
			HttpMethods.Post,
			data,
		);

		const cs = cookies();

		const { access_token, user } = response;

		cs.set("token", access_token);
		cs.set("user", JSON.stringify(user));
		return redirect(routeConst.HOME.path);
	} catch (err) {
		console.log(err);
		return { errors: {}, message: "Something went wrong" };
	}
}
