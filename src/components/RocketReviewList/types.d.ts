import { IRocket } from '@/models/rocketForm'
import { IUser } from '@/models/userListApiResponse'

export interface IRocketReviewListProps
  extends React.ComponentPropsWithoutRef<'div'> {
  editRocket: (formData: IRocket) => void
}
