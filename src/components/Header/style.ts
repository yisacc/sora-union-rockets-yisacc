import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #fafafa;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 100px;
  min-height: 80px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  transform: translateY(0);
  transition: all 0.95s ease;
`

export const HeaderTitleSection = styled.a`
  line-height: 100px;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const HeaderTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.primary};
  line-height: 100px;
  transition: all 0.3s ease;

  span {
    color: ${({ theme }) => theme.text.secondary};
  }
`

export const AddRocketButtonSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ButtonContainer = styled.div`
  margin-top: 20px;
`

export const SubmitButton = styled.a`
  cursor: pointer;
  color: #fff;
  background-color: #fe3f40;
  border-radius: 30px;
  margin-bottom: 10px;
  text-transform: uppercase;
  word-wrap: break-word;
  white-space: normal;
  border: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.15s ease-in-out;
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  line-height: 1.5;
  display: flex;
  gap: 10px;
`
