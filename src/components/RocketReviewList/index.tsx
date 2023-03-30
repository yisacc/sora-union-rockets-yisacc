import { Wrapper, Container, ErrorModule, ErrorMsg, ErrorIcon } from './style'
import { RocketReviewCard } from '../RocketReviewCard'
import { useStoreState } from '@/store/hooks'
import { FaRocket } from 'react-icons/fa'

export const RocketReviewList: React.FC<{}> = () => {
  const { rockets } = useStoreState((state) => state)

  return (
    <Wrapper>
      <Container>
        {rockets?.length ? (
          <RocketReviewCard />
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
    </Wrapper>
  )
}
