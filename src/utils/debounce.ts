type Callback = (...args: any[]) => void

export const debounce = (fn: Callback, delay = 300): Callback => {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: any[]) => {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      fn.apply(null, args)
    }, delay)
  }
}
