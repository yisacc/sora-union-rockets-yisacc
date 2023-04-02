import { IRocket } from '@/models/rocketForm'
import { IUser } from '@/models/userListApiResponse'

export interface IHeaderProps extends React.ComponentPropsWithoutRef<'div'> {
  handleShowAddForm: () => void
  showAddForm: boolean
}