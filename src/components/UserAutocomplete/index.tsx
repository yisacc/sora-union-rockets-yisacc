import styled from 'styled-components'
import Select, { SingleValue } from 'react-select'
import { IUserAutocomplete } from './types'
import { debounce, requestItems } from '@/utils'
import { useCallback, useEffect, useRef, useState } from 'react'
import { IUser } from '@/models/response'

const Input = styled(Select)`
  .select__control {
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
    &:hover {
      border-color: ${({ theme }) => theme.bg.primary};
    }
  }
`
interface Option {
  value: number
  label: string
}

const UserAutocomplete: React.FC<IUserAutocomplete> = ({
  onFieldChange,
  name,
  ...rest
}) => {
  const [query, setQuery] = useState('')
  const [currentQuery, setCurrentQuery] = useState('')
  const [users, setUsers] = useState<IUser[]>([])
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] =
    useState<SingleValue<unknown>>(null)

  const setQueryStringDebounce = useCallback(
    debounce((currentQueryString: string) => {
      setQuery(currentQueryString)
    }, 500),
    []
  )

  useEffect(() => {
    setQueryStringDebounce(currentQuery)
  }, [currentQuery, setQueryStringDebounce])

  useEffect(() => {
    if (query) {
      requestItems('GET /search/users', { q: query }).then((users) => {
        if (users?.items) {
          setUsers(users.items)
          const transformedOptions = users.items.map((option: IUser) => ({
            value: option.id,
            label: option.login,
          }))
          setOptions(transformedOptions)
        }
      })
    }
  }, [query])

  const handleInputChange = (value: string) => {
    setCurrentQuery(value)
  }

  const handleOnChange = (value: SingleValue<unknown>) => {
    setSelectedOption(value)
    const selectedUser = users.filter(
      (user) =>
        user.login === (value as Option).label &&
        user.id === (value as Option).value
    )
    onFieldChange(name, selectedUser[0] as IUser)
  }
  return (
    <>
      <Input
        value={selectedOption}
        options={options}
        onInputChange={handleInputChange}
        onChange={handleOnChange}
        placeholder="Search for an option..."
        isClearable
        isSearchable
        name={name}
      />
    </>
  )
}

export default UserAutocomplete
