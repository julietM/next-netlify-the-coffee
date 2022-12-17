import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  
     <Navbar/>
     
    </div>
    
  )
}
