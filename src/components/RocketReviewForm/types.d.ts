import { IRocket } from '@/models/rocketForm'
import { IUser } from '@/models/userListApiResponse'

export interface IRocketReviewFormProps extends React.ComponentPropsWithoutRef<'div'> {
  handleShowAddForm: () => void
  setValues: Dispatch<SetStateAction<IRocket>>
  values: IRocket
  mode?: 'add' | 'edit'
}