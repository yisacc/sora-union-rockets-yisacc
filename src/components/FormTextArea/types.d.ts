export interface IFormTextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  onFieldChange: (fieldName: string, value: string) => void
}
