import { Navigator } from "@/app/components";
import { routeConst } from "../constants";

export default function AuthLayout() {
  return (
    <>
      <Navigator
        className="flex gap-3 justify-end w-full fixed top-0 left-0"
        paths={[routeConst.SIGN_IN, routeConst.REGISTER]}
      />

      <main className="mt-16">

      </main>
    </>
  )
}