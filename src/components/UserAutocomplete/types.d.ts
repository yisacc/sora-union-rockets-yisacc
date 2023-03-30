export interface IUserAutocomplete
  extends React.ComponentPropsWithoutRef<'input'> {
  onFieldChange: (fieldName: string, value: string) => void
}
