import { Wrapper, Container } from './style'
import { RocketReviewForm } from '../RocketReviewForm'

export const RocketReviewList: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Container>
        <RocketReviewForm />
      </Container>
    </Wrapper>
  )
}
