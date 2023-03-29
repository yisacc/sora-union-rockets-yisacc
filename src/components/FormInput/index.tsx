import { Input } from './style'
import { IFormInputProps } from './types'

export const FormInput: React.FC<IFormInputProps> = ({ ...rest }) => {
  return (
    <>
      <Input {...rest}></Input>
    </>
  )
}
