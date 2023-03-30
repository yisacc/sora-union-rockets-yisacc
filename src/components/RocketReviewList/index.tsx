import {
  Wrapper,
  Container,
  Card,
  CardImg,
  CardImgWrapper,
  CardContentHeader,
  CardTitleContainer,
  CardTitle,
  RocketNameContainer,
  UpdateRocket,
  CardBreak,
} from './style'
import { FaEdit, FaRocket, FaTrashAlt } from 'react-icons/fa'

export const RocketReviewList: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Container>
        <Card>
          <CardImgWrapper>
            <CardImg
              src="http://localhost:3001/static/media/754992997646380942305.7c94b6fa.jpg"
              alt="test"
            ></CardImg>
          </CardImgWrapper>
          <div>
            <CardContentHeader>
              <div style={{ display: 'flex' }}>
                <CardTitleContainer>
                  <CardTitle>Test</CardTitle>
                </CardTitleContainer>
                <RocketNameContainer>
                  <FaRocket
                    style={{
                      width: '18px',
                      display: 'inline',
                      marginRight: '1px',
                      position: 'relative',
                      color: '#03a4ed',
                    }}
                  />
                  <strong>test rocket</strong>
                </RocketNameContainer>
                <UpdateRocket>
                  <FaEdit />
                  <FaTrashAlt style={{ color: '#fe3f40' }} />
                </UpdateRocket>
              </div>
              <CardBreak></CardBreak>
            </CardContentHeader>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda omnis accusantium rem cupiditate debitis praesentium ad
              ipsum quia ullam veniam est velit nobis facere, obcaecati possimus
              eius, eos doloremque quibusdam.
            </div>
          </div>
        </Card>
      </Container>
    </Wrapper>
  )
}
