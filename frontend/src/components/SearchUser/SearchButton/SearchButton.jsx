import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './SearchButton.module.css'
import { FcSearch } from 'react-icons/fc'
import { searchUserByName, userActions } from '../../../redux/Reducers/User-Reducer'




export const SearchButton = () => {

  const [searchValue, setSearchValue] = useState('')
  const inputFocusRef = useRef()
  const dispatch = useDispatch()

  const setInputFocus = () => {
    inputFocusRef.current.focus()
  }

  const onChageHandler = (e) => {
    setSearchValue(e.target.value)
    // dispatch(searchUserByName(e.target.value))
    dispatch(userActions.setSearchName(e.target.value))
  }


  return (
    <div className={style.container}>
      <input type='text'
        id='search'
        className={style.search}
        name='search'
        placeholder='Search by name'
        ref={inputFocusRef}
        value={searchValue}
        onChange={onChageHandler}
      />
      <span className={style.searchButton}>
        <FcSearch onClick={setInputFocus} />
      </span>
    </div>
  )
}
