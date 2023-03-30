import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  max-width: 800px;
  margin: 0 auto;
  clear: both;
  padding-top: 0;
  padding-bottom: 40px;
`
export const Container = styled.div`
  min-width: 800px;
`

const scaleTransition = `transform 0.3s ease-in-out`

const animateIcon = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
`
export const ErrorModule = styled.div`
  margin: 40px auto 20px;
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};

  svg {
    animation: ${animateIcon} 1s ease-in-out infinite;
  }
`

export const ErrorIcon = styled.div`
  font-size: 34px;
  margin: 15px;
  animation: animateIcon 5s infinite;
`
export const ErrorMsg = styled.div`
  font-size: 24px;
`
