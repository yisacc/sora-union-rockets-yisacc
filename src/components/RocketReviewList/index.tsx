import { Wrapper, Container, ErrorModule, ErrorMsg, ErrorIcon } from './style'
import { RocketReviewCard } from '../RocketReviewCard'
import { useStoreActions, useStoreState } from '@/store/hooks'
import { FaRocket } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import ConfirmDeleteRocketReview from '../ConfirmDeleteRocketReview'
import { IRocketReviewListProps } from './types'

export const RocketReviewList: React.FC<IRocketReviewListProps> = ({
  editRocket,
}) => {
  const { rockets } = useStoreState((state) => state)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const { removeRocket } = useStoreActions((actions) => actions)
  const [deleteReviewId, setDeleteReviewId] = useState<null | number>(null)
  const handleDeleteClick = (id: number) => {
    setDeleteReviewId(id)
    setShowDeleteModal(true)
  }

  const handleCloseModal = () => {
    setDeleteReviewId(null)
    setShowDeleteModal(false)
  }

  const handleConfirmDelete = (id: number) => {
    removeRocket(id)
    setShowDeleteModal(false)
    setDeleteReviewId(null)
  }

  useEffect(() => {
    if (showDeleteModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showDeleteModal])
  return (
    <Wrapper>
      <Container>
        {rockets?.length ? (
          rockets.map((rocket) => (
            <RocketReviewCard
              key={rocket.id}
              rocket={rocket}
              handleDeleteClick={handleDeleteClick}
              editRocket={editRocket}
            />
          ))
        ) : (
          <ErrorModule>
            <ErrorIcon>
              <FaRocket size="40px"></FaRocket>
            </ErrorIcon>
            <ErrorMsg>
              No reviews available yet. Be the first to add a review by clicking
              on the &apos;Add Review&apos; button above. Your feedback helps us
              improve our products and services.
            </ErrorMsg>
          </ErrorModule>
        )}
      </Container>
      <ConfirmDeleteRocketReview
        isOpen={showDeleteModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        id={deleteReviewId!}
      />
    </Wrapper>
  )
}
