import Link from "next/link"
import { getShops } from "../actions"
import { routeConst } from "../constants"
import { ErrorCompoent, StoreSvg } from "../components"

export default async function ShopsPage() {
  const shops = await getShops()

  if (shops.statusCode) {
    return (
      <ErrorCompoent />
    )
  }

  return (
    <section title="shops" className="grid grid-cols-3 gap-10 max-w-2xl m-auto place-content-center h-screen">
      {shops.map(shop => (
        <Link key={shop.id} href={`${routeConst.SHOPS.path}/${shop.id}`} className="grid place-content-center">
          <StoreSvg width={200} height={200} />
          <span className="text-center font-semibold">{shop.name}</span>
        </Link>
      ))}
    </section>
  )
}
