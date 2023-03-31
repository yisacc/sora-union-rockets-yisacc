import { IRocket } from '@/models/rocket'
import { IUser } from '@/models/response'

export interface IRocketReviewFormProps extends React.ComponentPropsWithoutRef<'div'> {
    handleShowAddForm: () => void
}