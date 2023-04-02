import RootLayout from '@/layout'
import {
  PageWrapper,
  RocketReviewList,
  RocketReviewForm,
  Header,
  initialValues,
} from '@/components'
import Head from 'next/head'
import { useState } from 'react'
import { IRocket } from '@/models/rocketForm'

export default function Home() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [mode, setMode] = useState<'add' | 'edit'>('add')
  const [values, setValues] = useState<IRocket>(initialValues)
  const handleShowAddForm = () => {
    setValues(initialValues)
    setShowAddForm((prevShowAddForm) => !prevShowAddForm)
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
