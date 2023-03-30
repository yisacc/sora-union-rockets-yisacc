
import { Header } from '@/components'
import RootLayout from '@/layout'
import { PageWrapper, RocketReviewList, RocketReviewForm } from '@/components'
import Head from 'next/head'
import { useState } from 'react'

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
          {showAddForm === false ? <RocketReviewForm /> : <RocketReviewList />}
        </PageWrapper>
      </RootLayout>
    </>
  )
}
