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
            <span>-Rockets List</span>
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
              <span style={{ textAlign: 'center' }}>Add Rocket</span>
            </SubmitButton>
          </ButtonContainer>
        </AddRocketButtonSection>
      </Wrapper>
    </>
  )
}
