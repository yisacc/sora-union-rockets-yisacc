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
import { IFormProps, IFormSectionProps } from './types'

const errorMessage = 'This Field is Required.'

const FormSection: React.FC<IFormSectionProps> = ({
  label,
  error,
  children,
}) => (
  <FormContentSection>
    <FormLabel>{label}</FormLabel>
    {children}
    <ErrorSpan errorString={error ? errorMessage : ''} />
  </FormContentSection>
)

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
            <FormSection label="Title" error={errors.title}>
              <FormInput
                name="title"
                value={values.title}
                onFieldChange={onFieldChange}
              />
            </FormSection>
            <FormSection label="Rocket Name" error={errors.rocketName}>
              <FormInput
                name="rocketName"
                value={values.rocketName}
                onFieldChange={onFieldChange}
              />
            </FormSection>
          </FormContent>
          <FormContent>
            <FormSection label="Description" error={errors.description}>
              <FormTextArea
                name="description"
                value={values.description}
                onFieldChange={onFieldChange}
              />
            </FormSection>
          </FormContent>
          <FormContent>
            <FormSection label="Github User" error={errors.userData}>
              <FormSelect
                name="userData"
                value={values.userData?.login}
                id={values.userData?.id!}
                onFieldChange={onFieldChange}
              />
            </FormSection>
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
