import { signOut } from "../auth/actions";
import { cookies } from "next/headers";
import { Navigator } from "../components";
import { routeConst } from "../constants";

interface Props {
  children: React.ReactNode
}

export default function ShopsLayout({ children }: Props) {
  const cs = cookies()
  const token = cs.get('token')

  return (
    <div className="grid grid-cols-[auto_1fr] gap-8">
      <aside className="bg-slate-800 h-dvh w-[100px]">
        <Navigator
          paths={[routeConst.SHOPS]}
          className="w-full flex justify-center"
          linkClassName="w-full text-center p-4 hover:bg-white hover:text-black font-semibold first-letter:uppercase"
        />

        {token && (
          <div className="flex justify-center w-full">
            <form action={signOut} className="w-full">
              <button className="w-full p-4 hover:bg-white hover:text-black font-semibold" type="submit">Logout</button>
            </form>
          </div>
        )}
      </aside>

      <main>
        {children}
      </main>
    </div>
  )
}