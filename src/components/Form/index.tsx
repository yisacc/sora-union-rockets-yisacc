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
import FormSelect from '../UserAutocomplete'
import { IFormProps } from './types'
export const Form: React.FC<IFormProps> = ({
  values,
  errors,
  onFieldChange,
  onSubmit,
  ...rest
}) => {
  const errorMessage = `This Field is Required.`
  return (
    <Card>
      <CardContent>
        <form onSubmit={onSubmit} id="signupform">
          <FormContent>
            <FormContentSection>
              <FormLabel>Title</FormLabel>
              <FormInput name="title" onFieldChange={onFieldChange}></FormInput>
              <ErrorSpan errorString={errors.title ? errorMessage : ''} />
            </FormContentSection>
            <FormContentSection>
              <FormLabel>Rocket Name</FormLabel>
              <FormInput
                name="rocketName"
                onFieldChange={onFieldChange}
              ></FormInput>
              <ErrorSpan errorString={errors.rocketName ? errorMessage : ''} />
            </FormContentSection>
          </FormContent>
          <FormContent>
            <FormContentSection>
              <FormLabel>Description</FormLabel>
              <FormTextArea name="description" onFieldChange={onFieldChange} />
              <ErrorSpan errorString={errors.title ? errorMessage : ''} />
            </FormContentSection>
          </FormContent>
          <FormContent>
            <FormContentSection>
              <FormLabel>Github User</FormLabel>
              <FormSelect name="user" onFieldChange={onFieldChange} />
              <ErrorSpan errorString={errors.title ? errorMessage : ''} />
            </FormContentSection>
            <FormContentSection></FormContentSection>
          </FormContent>
          <ButtonContainer>
            <Button type="submit" value="Submit" />
          </ButtonContainer>
        </form>
      </CardContent>
    </Card>
  )
}
