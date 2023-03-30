export interface IFormInputProps extends React.ComponentPropsWithoutRef<'input'> {
  onFieldChange: (fieldName: string, value: string) => void
  name: string
}
