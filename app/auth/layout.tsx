import { Navigator } from "@/app/components";
import { routeConst } from "../constants";

interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full">
        <Navigator
          className="flex gap-2 justify-end px-4 py-2"
          paths={[routeConst.SIGN_IN, routeConst.REGISTER]}
        />
      </div>

      <main className="mt-12 max-w-[1280px] m-auto p-4">
        {children}
      </main>
    </>
  )
}