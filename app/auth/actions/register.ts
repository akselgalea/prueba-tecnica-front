"use server";
import { API_URL } from "@/app/constants";
import type { RegisterApiResponse } from "@/app/models";
import { HttpMethods, useFetch } from "@/app/utils/fetch";
import { cookies } from "next/headers";
import { z } from "zod";

const RegisterSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	username: z.string().min(2),
	password: z.string().min(4),
});

const valdiateRegister = (input: unknown) => {
	return RegisterSchema.safeParse(input);
};

const defaultErrors: {
	name: string[];
	email: string[];
	username: string[];
	password: string[];
} = {
	name: [],
	email: [],
	username: [],
	password: [],
};

export async function register(input: unknown) {
	console.log(input);
	const cs = cookies();
	const { success, error, data } = valdiateRegister(input);

	if (!success) {
		return { errors: error.flatten().fieldErrors, message: "Invalid fields" };
	}

	const response = await useFetch<RegisterApiResponse>(
		`${API_URL}/auth/register`,
		HttpMethods.Post,
		data,
	);

	if (response.statusCode) {
		return { errors: defaultErrors, message: "Something went wrong" };
	}

	cs.set("token", response.access_token);
	cs.set("user", JSON.stringify(response.user));

	return {
		errors: defaultErrors,
		message: "User registered successfully",
		user: response.user,
	};
}
