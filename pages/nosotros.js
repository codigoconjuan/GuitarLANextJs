import Image from 'next/future/image'
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
        <main className="contenedor">
            <h1 className="heading">Nosotros</h1>

            <div className={styles.contenido}>
                <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

                <div>
                  <p>In suscipit tincidunt justo, quis faucibus neque pulvinar in. Maecenas lacus libero, imperdiet id urna nec, fringilla euismod sem. In aliquet molestie sapien, aliquam interdum ipsum mollis et. Suspendisse interdum dictum pretium. Vivamus vel hendrerit est. Maecenas non accumsan enim. Aliquam faucibus nisl non erat mattis facilisis. Integer suscipit lobortis lectus id sollicitudin. </p>

                  <p>Suspendisse sollicitudin faucibus maximus. Ut risus lorem, commodo et tortor vehicula, semper consequat nisi. Donec pretium sit amet purus eget vehicula. Nulla non malesuada eros. Duis vehicula volutpat nunc, nec consequat dui viverra sollicitudin. Sed vel augue cursus, hendrerit nisi ut, commodo nibh. Vestibulum ante ipsum primis in.</p>
                </div>
            </div>
        </main>
    </Layout>
  )
}
