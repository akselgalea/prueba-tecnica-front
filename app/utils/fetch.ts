import { cookies } from "next/headers";
export enum HttpMethods {
	Get = "GET",
	Post = "POST",
	Delete = "DELETE",
	Put = "PUT",
	Patch = "PATCH",
	Options = "OPTIONS",
	Head = "HEAD",
}
export async function useFetch<T>(
	url: string,
	method: HttpMethods = HttpMethods.Get,
	data?: unknown,
): Promise<T> {
	const cs = cookies();

	return fetch(url, {
		method,
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${cs.get("token")?.value}`,
		},
		body: JSON.stringify(data),
	}).then((res) => res.json());
}
