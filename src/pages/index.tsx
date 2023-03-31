
import { Header } from '@/components'
import RootLayout from '@/layout'
import { PageWrapper, RocketReviewList, RocketReviewForm } from '@/components'
import Head from 'next/head'
import { useState } from 'react'
import { IRocket } from '@/models/rocket'

export default function Home() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [isAddFormShown, setIsAddFormShown] = useState<boolean>(false)
  const [mode, setMode] = useState<'add' | 'edit'>('add')
  const handleShowAddForm = () => {
    setShowAddForm(!showAddForm)
  }
  const editRocket = (formData: IRocket) => {
    setIsAddFormShown(true)
    setMode('edit')
    setFormData(formData)
  }
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
          <Header
            handleShowAddForm={handleShowAddForm}
            showAddForm={showAddForm}
          />
          {showAddForm ? (
            <RocketReviewForm handleShowAddForm={handleShowAddForm} />
          ) : (
            <RocketReviewList />
          )}
        </PageWrapper>
      </RootLayout>
    </>
  )
}
