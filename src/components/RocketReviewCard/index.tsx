import {
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
import { IRocketReviewCardProps } from './types'

export const RocketReviewCard: React.FC<IRocketReviewCardProps> = ({
  rocket,
}) => {
  const { title, rocketName, description, userData } = rocket
  return (
    <Card>
      <CardImgWrapper>
        <CardImg src={userData?.avatar_url} alt="test"></CardImg>
      </CardImgWrapper>
      <div>
        <CardContentHeader>
          <div style={{ display: 'flex' }}>
            <CardTitleContainer>
              <CardTitle>{title}</CardTitle>
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
              <strong>{rocketName}</strong>
            </RocketNameContainer>
            <UpdateRocket>
              <FaEdit />
              <FaTrashAlt style={{ color: '#fe3f40' }} />
            </UpdateRocket>
          </div>
          <CardBreak></CardBreak>
        </CardContentHeader>
        <div>{description}</div>
      </div>
    </Card>
  )
}
