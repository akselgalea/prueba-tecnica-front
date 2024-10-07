import { Navigator } from "../components"
import { metadata } from "../layout"

interface Props {
  children: React.ReactNode
}

metadata.title = "Admin"

export default function AdminLayout({ children }: Props) {
  return (
    <aside>

      <Navigator paths={[]}>

      </Navigator>
    </aside>
  )
}