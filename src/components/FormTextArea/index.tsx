import { TextArea } from './style'
import { IFormTextareaProps } from './types'

export const FormTextArea: React.FC<IFormTextareaProps> = ({
  ...rest
}) => {
  return (
    <>
      <TextArea {...rest}></TextArea>
    </>
  )
}
