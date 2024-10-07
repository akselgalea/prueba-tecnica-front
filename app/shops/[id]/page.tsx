import { getShopById } from "@/app/actions"
import { ErrorCompoent } from "@/app/components"
import { toCLP } from "@/app/utils"
import Image from "next/image"

export default async function ShopPage({ params: { id } }: { params: { id: number } }) {
  const shop = await getShopById(id)
  console.log(shop)

  if (shop.statusCode) {
    return (
      <ErrorCompoent />
    )
  }

  return (
    <>
      {shop.products.map(prod => (
        <article key={prod.id}>
          <Image width={200} height={200} src={prod.image} alt={prod.name} />
          <p className="font-medium first-letter:uppercase">{prod.name}</p>
          <p className="font-semibold">{toCLP(prod.price)}</p>
        </article>
      ))}
    </>
  )
}