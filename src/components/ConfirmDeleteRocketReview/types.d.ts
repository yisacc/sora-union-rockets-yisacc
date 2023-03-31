export interface IConfirmDeleteRocketReviewProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (id: number) => void
  id: number
}
