import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Rockets} from '@/components'


export default function Home() {
  return (
    <>
      <Head>
        <title>Sora Union Rockets</title>
        <meta name="description" content="Sora Union Rockets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
<Rockets />
      </main>
    </>
  )
}
