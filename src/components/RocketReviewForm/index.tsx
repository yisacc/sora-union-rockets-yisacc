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
export const RocketReviewForm = () => {
  return (
    <>
      <CardDescription>
        <CardDescriptionText>
          <CardDescriptionTextTitle>
            Rocket Submission Form
          </CardDescriptionTextTitle>
          <CardDescriptionTextDetail>
            Please fill out the following form to submit a new rocket review to our
            database. All fields are required.
          </CardDescriptionTextDetail>
        </CardDescriptionText>
      </CardDescription>

      <Wrapper>
        <Card>
          <CardHeader>
            <CardTitle>Add New Rocket</CardTitle>
          </CardHeader>
          <Form />
        </Card>
      </Wrapper>
    </>
  )
}
