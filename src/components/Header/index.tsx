import { FaPlusCircle } from 'react-icons/fa'
import {
  Wrapper,
  HeaderTitleSection,
  HeaderTitle,
  AddRocketButtonSection,
  ButtonContainer,
  SubmitButton,
} from './style'
export const Header = () => {
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
            <SubmitButton type="submit">
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
