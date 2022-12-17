import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import Image from 'next/image'
import styles from 'styles/menu.module.css';

export default function Menu() {
  return (
    <div className="container">
      <Head>
        <title>Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  
     
    <h1>menu</h1>
    <nav>
        <ul>
            <li><a href="/about">Inicio</a></li>
            <li><a href="/menu">menu</a></li>
            <li><a href="/contact">contacto</a></li>
        </ul>
    </nav>
    <h1>Menu del café</h1>
   <div className={styles.menu}>
    <Image src="/img/cafe.jpeg" width={200} height={200}></Image>
    <Image src="/img/www.jpeg" width={200} height={200}></Image>
    <Image src="/img/cafeR.jpeg" width={200} height={200}></Image>
    <Image src="/img/dee.jpeg" width={200} height={200}></Image>
    <Image src="/img/OIP.jpeg" width={200} height={200}></Image>
    <Image src="/img/vaso.jpeg" width={200} height={200}></Image>

    </div>
    </div>
    
  )
}
