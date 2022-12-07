import Link from "next/link"
import Layout from "../components/layout"

export default function Pagina404() {
  return (
    <Layout
        title="Página No Encontrada"
    >
        <p className="error">Página No Encontrada</p>
        <Link href='/'>
            <a className="error-enlace">
                Ir a Inicio
            </a>
        </Link>
    </Layout>
  )
}
