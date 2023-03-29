import { Span } from './style'
import { IErrorSpanProps } from './types'

export const ErrorSpan: React.FC<IErrorSpanProps> = ({ errorString }) => {
  return (
    <>
      <Span>{errorString}</Span>
    </>
  )
}
