import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bg.secondary};
  font-size: 100%;
`

export const Card = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  clear: both;
  padding-top: 0;
`
export const CardHeader = styled.div`
  top: -70px;
  margin: 0 auto;
  font-size: 13px;
  width: auto;
  display: flex;
  background: #03a4ed;
  justify-content: center;
`
export const CardTitle = styled.div`
  height: 50px;
  text-align: center;
  color: #ffffff;
  padding-top: 15px;
  font-size: 150%;
  background: #03a4ed;
`
export const CardDescription = styled.div`
  max-width: 100%;
`
export const CardDescriptionText = styled.div`
  width: 966px;
  margin: 0 auto;
  padding-top: 50px;
  font-size: 80%;
`
export const CardDescriptionTextTitle = styled.h1`
  color: #2a2a2a;
  text-align: center;
  font-size: 250%;
`

export const CardDescriptionTextDetail = styled.p`
  color: #2a2a2a;
  text-align: center;
  font-size: 120%;
  padding: 0;
`
