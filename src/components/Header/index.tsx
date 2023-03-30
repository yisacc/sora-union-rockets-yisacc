import { FaPlusCircle } from 'react-icons/fa'
import {
  Wrapper,
  HeaderTitleSection,
  HeaderTitle,
  AddRocketButtonSection,
  ButtonContainer,
  SubmitButton,
} from './style'
import { IHeaderProps } from './types'
export const Header: React.FC<IHeaderProps> = ({
  handleShowAddForm,
  ...rest
}) => {
  return (
    <>
      <Wrapper>
        <HeaderTitleSection>
          <HeaderTitle>
            Sora Union
            <span>-rockets reviews</span>
          </HeaderTitle>
        </HeaderTitleSection>
        <AddRocketButtonSection>
          {' '}
          <ButtonContainer>
            <SubmitButton type="submit" onClick={handleShowAddForm}>
              <FaPlusCircle
                size={20}
                style={{
                  textAlign: 'center',
                }}
              />
              <span style={{ textAlign: 'center' }}>Add Review</span>
            </SubmitButton>
          </ButtonContainer>
        </AddRocketButtonSection>
      </Wrapper>
    </>
  )
}
