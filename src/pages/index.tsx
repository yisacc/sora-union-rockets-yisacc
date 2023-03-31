
import { Header } from '@/components'
import RootLayout from '@/layout'
import { PageWrapper, RocketReviewList, RocketReviewForm } from '@/components'
import Head from 'next/head'
import { useState } from 'react'
import { IRocket } from '@/models/rocket'

export default function Home() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [mode, setMode] = useState<'add' | 'edit'>('add')
  const [values, setValues] = useState<IRocket>({
    title: '',
    rocketName: '',
    description: '',
    userData: null,
  })
  const handleShowAddForm = () => {
    setShowAddForm(!showAddForm)
    setMode('add')
  }
  const editRocket = (formData: IRocket) => {
    setShowAddForm(true)
    setMode('edit')
    setValues(formData)
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
            <RocketReviewForm
              values={values}
              setValues={setValues}
              handleShowAddForm={handleShowAddForm}
              mode={mode}
            />
          ) : (
            <RocketReviewList editRocket={editRocket} />
          )}
        </PageWrapper>
      </RootLayout>
    </>
  )
}
