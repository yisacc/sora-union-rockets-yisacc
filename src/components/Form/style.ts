import styled from 'styled-components'

export const Card = styled.div`
  box-shadow: 0 3px 5px rgba(25, 30, 62, 0.02);
  border-radius: 10px;
  margin-bottom: 30px;
  border: 1px solid #ecedf2;
  background-color: #fff;
  color: #666;
  position: relative;
`

export const CardContent = styled.div`
  padding: 30px;
  color: #7e7d8f;
  padding-top: 20px;
  overflow: auto;
  margin-top: 20px;
`

export const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`

export const FormContentSection = styled.div`
  width: 100%;
  margin-right: 50px;
`

export const Button = styled.input`
  cursor: pointer;
  color: #fff;
  background-color: #fe3f40;
  border-radius: 30px;
  margin-top: 20px;
  text-transform: uppercase;
  word-wrap: break-word;
  white-space: normal;
  border: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  line-height: 1.5;
`

export const ButtonContainer = styled.div`
  margin-top: 20px;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
`
