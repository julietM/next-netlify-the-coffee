import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The coffee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  
     <Navbar/>
     
    </div>
    
  )
}
