import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Header, Rockets} from '@/components'


export default function Home() {
  return (
    <>
      <Head>
        <title>Sora Union Rockets</title>
        <meta name="description" content="Sora Union Rockets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          className='main-banner wow fadeIn'
          id='top'
          data-wow-duration='1s'
          data-wow-delay='0.5s'
        >
          <Header />
        </div>

      </main>
    </>
  )
}
