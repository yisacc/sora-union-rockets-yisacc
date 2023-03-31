import { IRocket } from '@/models/rocket'

export interface IRocketReviewCardProps {
  rocket: IRocket
  handleDeleteClick: (id: number) => void
}
