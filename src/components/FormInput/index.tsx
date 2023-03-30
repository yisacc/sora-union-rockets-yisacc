import styled from 'styled-components'
import { IFormInputProps } from './types'

export const Input = styled.input`
  margin: 0;
  margin-bottom: 10px;
  display: block;
  width: 100%;
  height: 48px;
  border: 1px solid #e2e3eb;
  background-color: #fbfbfd;
  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  color: #4a4a4a;
  outline: 0;
`
const FormInput: React.FC<IFormInputProps> = ({
  onFieldChange,
  name,
  ...rest
}) => {
  return (
    <Input
      {...rest}
      onChange={(e) => onFieldChange(name, e.target.value)}
    ></Input>
  )
}

export default FormInput
