import { IRocket } from '@/models/rocket'
import { IUser } from '@/models/response'

export interface IHeaderProps extends React.ComponentPropsWithoutRef<'div'> {
  handleShowAddForm: () => void
  showAddForm: boolean
}