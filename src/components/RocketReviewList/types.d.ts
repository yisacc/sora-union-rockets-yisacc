import { IRocket } from '@/models/rocket'
import { IUser } from '@/models/response'

export interface IRocketReviewListProps
  extends React.ComponentPropsWithoutRef<'div'> {
  editRocket: (formData: IRocket) => void
}
