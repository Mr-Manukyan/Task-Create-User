import { useEffect } from 'react'
import { Header } from './components/Header/Header'
import { UsersContainer } from './components/UsersContainer/UsersContainer'
import './App.css'
import { getAllUsers } from './redux/Reducers/User-Reducer'
import { useDispatch } from 'react-redux'
import { SearchUser } from './components/SearchUser/SearchUser'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <div className="App">
      <Header />
      <SearchUser />
      <UsersContainer />
    </div>
  )

}

export default App
