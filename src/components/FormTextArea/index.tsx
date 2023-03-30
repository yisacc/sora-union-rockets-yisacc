import styled from 'styled-components'
import { IFormTextareaProps } from './types'

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 140px;
  border: 1px solid #e2e3eb;
  background-color: #fbfbfd;
  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  color: #4a4a4a;
  outline: 0;
`

const FormTextArea: React.FC<IFormTextareaProps> = ({ ...rest }) => {
  return <TextArea {...rest} />
}

export default FormTextArea
