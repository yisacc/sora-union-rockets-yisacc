
import { Header, Rockets } from '@/components'
import RootLayout from '@/layout'
import { PageWrapper } from '@/components'
import Head from 'next/head'
import { AddForm } from './components/AddForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sora Union Rockets</title>
        <meta name="description" content="Sora Union Rockets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <PageWrapper>
          <Header />
          <AddForm />
        </PageWrapper>
      </RootLayout>
    </>
  )
}
