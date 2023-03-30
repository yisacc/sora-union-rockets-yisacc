import { IRocket } from '@/models/rocket'
import { IUser } from '@/models/response'

export interface IFormProps extends React.ComponentPropsWithoutRef<'form'> {
  values: IRocket
  errors: Record<keyof IRocket, boolean>
  onFieldChange: (fieldName: string, value: string) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}
