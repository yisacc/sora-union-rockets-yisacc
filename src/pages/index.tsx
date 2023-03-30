
import { Header } from '@/components'
import RootLayout from '@/layout'
import { PageWrapper } from '@/components'
import Head from 'next/head'
import { AddForm } from './components/AddForm'
import { useState } from 'react'
import { Rockets } from './components/Rockets'

export default function Home() {
  const [showAddForm, setShowAddForm] = useState(false)
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
          {showAddForm?<AddForm />:<Rockets />}
        </PageWrapper>
      </RootLayout>
    </>
  )
}
