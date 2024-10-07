"use server";

import { API_URL } from "../constants";
import type { GetShopAPIResponse, GetShopsAPIResponse } from "@/app/models";
import { useFetch } from "../utils/fetch";

export async function getShops() {
	return useFetch<GetShopsAPIResponse>(`${API_URL}/stores`);
}

export async function getShopById(id: string | number) {
	return useFetch<GetShopAPIResponse>(`${API_URL}/stores/${id}`);
}
