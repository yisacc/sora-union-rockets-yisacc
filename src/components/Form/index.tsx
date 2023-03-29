import {
  CardHeader,
  Card,
  Wrapper,
  CardDescription,
  CardDescriptionText,
  CardDescriptionTextTitle,
  CardDescriptionTextDetail,
} from './style'
export const Form = () => {
  return (
    <>
      <CardDescription>
        <CardDescriptionText>
          <CardDescriptionTextTitle>
            Register at Tutor Ethiopia
          </CardDescriptionTextTitle>
          <CardDescriptionTextDetail>
            If you are a tutor or student looking to make full use of Tutor
            Ethiopia please fill in the form below. If any student / tutor
            viewing this site searches for your criteria, we will give them the
            opportunity to contact you.
          </CardDescriptionTextDetail>
        </CardDescriptionText>
      </CardDescription>

      <Wrapper>
        <Card>
          <CardHeader>Add New Rocket</CardHeader>
        </Card>
      </Wrapper>
    </>
  )
}
