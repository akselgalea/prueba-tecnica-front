"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { routeConst } from "@/app/constants";

export async function signOut() {
	const cs = cookies();

	cs.delete("token");
	cs.delete("user");

	return redirect(routeConst.SIGN_IN.path);
}
