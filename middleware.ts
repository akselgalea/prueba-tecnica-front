import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routeConst } from "./app/constants/routes.const";
import { cookies } from "next/headers";

export default function middleware(req: NextRequest) {
	const pathname = req.nextUrl.pathname;
	const cs = cookies();
	const token = cs.get("token")?.value;

	if (!pathname.startsWith("/auth")) {
		if (!token) {
			const url = new URL(routeConst.SIGN_IN.path, req.url);
			url.searchParams.append("redirectPath", pathname);

			return NextResponse.redirect(url);
		}
	} else {
		if (token) {
			return NextResponse.redirect(new URL(routeConst.HOME.path, req.url));
		}
	}

	NextResponse.next();
}

export const config = {
	matcher: ["/:path*"],
};
