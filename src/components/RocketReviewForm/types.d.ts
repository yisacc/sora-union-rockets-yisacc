import { IRocket } from '@/models/rocket'
import { IUser } from '@/models/response'

export interface IRocketReviewFormProps extends React.ComponentPropsWithoutRef<'div'> {
  handleShowAddForm: () => void
  setValues: Dispatch<SetStateAction<IRocket>>
  values: IRocket
  mode?: 'add' | 'edit'
}