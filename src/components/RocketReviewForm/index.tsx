import { Form } from '@/components'
import { useCallback, useState } from 'react'
import * as yup from 'yup'
import update from 'immutability-helper'
import {
  CardHeader,
  Card,
  Wrapper,
  CardDescription,
  CardDescriptionText,
  CardDescriptionTextTitle,
  CardDescriptionTextDetail,
  CardTitle,
} from './style'
import { IRocket } from '@/models/rocket'
import { IUser } from '@/models/response'
import { useStoreActions } from '@/store/hooks'

const formSchema = yup.object().shape({
  title: yup.string().required(),
  rocketName: yup.string().required(),
  description: yup.string().required(),
  userData: yup.object().required(),
})

export const RocketReviewForm: React.FC = () => {
  const { addRocket, updateRocket } = useStoreActions((actions) => actions)
  const [values, setValues] = useState<IRocket>({
    title: '',
    rocketName: '',
    description: '',
    userData: null,
  })
  const [errors, setErrors] = useState<Record<keyof IRocket, boolean>>({
    id: false,
    title: false,
    rocketName: false,
    description: false,
    userData: false,
  })

  const onFieldChange = useCallback(
    (fieldName: string, value: string | IUser) => {
      setValues((prevValues) =>
        update(prevValues, {
          [fieldName]: {
            $set: value,
          },
        })
      )
    },
    []
  )
  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const isFormValid = await formSchema.isValid(values, {
        abortEarly: false,
      })
      if (isFormValid) {
        addRocket({ ...values, id: new Date().getTime() })
      } else {
        formSchema.validate(values, { abortEarly: false }).catch((err) => {
          const errors = err.inner.reduce(
            (acc: Record<string, boolean>, error: yup.ValidationError) => {
              return {
                ...acc,
                [error.path!]: true,
              }
            },
            {}
          )
          setErrors((prevErrors) =>
            update(prevErrors, {
              $set: errors,
            })
          )
        })
      }
    },
    [values]
  )
  return (
    <>
      <CardDescription>
        <CardDescriptionText>
          <CardDescriptionTextTitle>
            Rocket Submission Form
          </CardDescriptionTextTitle>
          <CardDescriptionTextDetail>
            Please fill out the following form to submit a new rocket review to
            our database. All fields are required.
          </CardDescriptionTextDetail>
        </CardDescriptionText>
      </CardDescription>

      <Wrapper>
        <Card>
          <CardHeader>
            <CardTitle>Add New Rocket</CardTitle>
          </CardHeader>
          <Form
            values={values}
            errors={errors}
            onFieldChange={onFieldChange}
            onSubmit={onSubmit}
          />
        </Card>
      </Wrapper>
    </>
  )
}
