import { IRocket } from '@/models/rocketForm'
import { IUser } from '@/models/userListApiResponse'

export interface IFormProps extends React.ComponentPropsWithoutRef<'form'> {
  values: IRocket
  errors: Record<keyof IRocket, boolean>
  onFieldChange: (fieldName: string, value: string | IUser) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export interface IFormSectionProps {
  label: string;
  children: React.ReactNode;
  error,
}