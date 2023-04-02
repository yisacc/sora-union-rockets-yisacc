import { useCallback, useState } from 'react'
import * as yup from 'yup'
import update from 'immutability-helper'
import { Form } from '@/components'
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
import { IRocket } from '@/models/rocketForm'
import { IUser } from '@/models/userListApiResponse'
import { useStoreActions } from '@/store/typedStoreHooks'
import { IRocketReviewFormProps } from './types'

const formSchema = yup.object().shape({
  title: yup.string().required(),
  rocketName: yup.string().required(),
  description: yup.string().required(),
  userData: yup.object().required(),
})
export const initialValues: IRocket = {
  id: 0,
  title: '',
  rocketName: '',
  description: '',
  userData: null,
}

const initialErrors: Record<keyof IRocket, boolean> = {
  id: false,
  title: false,
  rocketName: false,
  description: false,
  userData: false,
}

export const RocketReviewForm: React.FC<IRocketReviewFormProps> = ({
  handleShowAddForm,
  setValues,
  values = initialValues,
  mode,
}) => {
  const { addRocket, updateRocket } = useStoreActions((actions) => actions)
  const [errors, setErrors] = useState(initialErrors)

  const onFieldChange = useCallback(
    (fieldName: string, value: string | IUser) => {
      setValues((prevValues: IRocket) =>
        update(prevValues, {
          [fieldName]: {
            $set: value,
          },
        })
      )
    },
    [setValues]
  )
  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        await formSchema.validate(values, { abortEarly: false })
      } catch (err: any) {
        const validationErrors = err.inner.reduce(
          (acc: Record<string, boolean>, error: yup.ValidationError) => {
            return {
              ...acc,
              [error.path!]: true,
            }
          },
          {}
        )
        setErrors(validationErrors)
        return
      }
      if (mode === 'add') {
        addRocket({ ...values, id: new Date().getTime() })
        setValues(initialValues)
      } else {
        updateRocket({
          id: values.id!,
          newRocket: values,
        })
      }

      handleShowAddForm()
    },
    [addRocket, handleShowAddForm, mode, setValues, updateRocket, values]
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
