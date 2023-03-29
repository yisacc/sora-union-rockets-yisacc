import { Select } from './style'
import { IFormSelectProps } from './types'

export const FormSelect: React.FC<IFormSelectProps> = ({ ...rest }) => {
  return (
    <>
      <Select {...rest}></Select>
    </>
  )
}
