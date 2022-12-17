import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import styles from  'styles/contact.module.css'

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>The coffee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  
           <h1>Contacto</h1>
     <nav>
        <ul>
        <li><a href="/about">Inicio</a></li>
            <li><a href="/menu">menu</a></li>
            <li><a href="/contact">contacto</a></li>
        </ul>
    </nav>
     <div className={styles.container}>
        <label className={styles.label}>Nombre:</label>
        <input className={styles.input} type="text"></input>
        <label className={styles.label}>Apellido:</label>
        <input  className={styles.input} type="text"></input>
        <button className={styles.button} type="submit">enviar</button>

     </div>
    </div>
    
  )
}
