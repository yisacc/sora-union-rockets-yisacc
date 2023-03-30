import FormLabel from '../FormLabel'
import FormInput from '../FormInput'
import FormTextArea from '../FormTextArea'
import {
  ButtonContainer,
  Card,
  CardContent,
  FormContent,
  FormContentSection,
  Button,
} from './style'
import { ErrorSpan } from '../ErrorSpan'
import FormSelect from '../FormSelect'
export const Form: React.FC = () => {
  const handleSubmit = () => {}
  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} id="signupform">
          <FormContent>
            <FormContentSection>
              <FormLabel>Title</FormLabel>
              <FormInput name="title"></FormInput>
              <ErrorSpan errorString="" />
            </FormContentSection>
            <FormContentSection>
              <FormLabel>Rocket Name</FormLabel>
              <FormInput name="rocketName"></FormInput>
              <ErrorSpan errorString="" />
            </FormContentSection>
          </FormContent>
          <FormContent>
            <FormContentSection>
              <FormLabel>Description</FormLabel>
              <FormTextArea name="description" />
              <ErrorSpan errorString="" />
            </FormContentSection>
          </FormContent>
          <FormContent>
            <FormContentSection>
              <FormLabel>Github User</FormLabel>
              <FormSelect name="user" />
            </FormContentSection>
            <FormContentSection></FormContentSection>
          </FormContent>
          <ButtonContainer>
            <Button type="submit" value="Continue" onClick={handleSubmit} />
          </ButtonContainer>
        </form>
      </CardContent>
    </Card>
  )
}
