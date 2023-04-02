import { IRocket } from '@/models/rocketForm'

export interface IRocketReviewCardProps {
  rocket: IRocket
  handleDeleteClick: (id: number) => void
  editRocket: (formData: IRocket) => void
}
