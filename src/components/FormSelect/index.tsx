import styled from 'styled-components'
import { IFormSelectProps } from './types'

const Select = styled.select`
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

const FormSelect: React.FC<IFormSelectProps> = ({ ...rest }) => {
  return <Select {...rest} />
}

export default FormSelect
