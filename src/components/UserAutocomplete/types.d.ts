import { IUser } from './../../store/model'
export interface IUserAutocomplete extends React.ComponentPropsWithoutRef<'input'> {
  onFieldChange: (fieldName: string, value: IUser) => void
  name: string
  id: number
}
