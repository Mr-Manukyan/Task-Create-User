import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOneUser, updateOneUserData } from '../../redux/Reducers/User-Reducer'
import { getAllUsers, getSearchName } from '../../redux/Selectors/User-Selector'
import { User } from './User/User'
import style from './UsersContainer.module.css'


export const UsersContainer = () => {

    const users = useSelector(getAllUsers)
    const searchName = useSelector(getSearchName)
    const dispatch = useDispatch()

    const removeOneUser = (userID) => {
        dispatch(deleteOneUser(userID))
    }

    const updateUserData = (updatedUserData) => {
        dispatch(updateOneUserData(updatedUserData))
    }

    let filtredUsers = []

    return (
        <div className={style.container}>


            <div className={style.wrapper}>
                {
                    !users.length && <div className={style.usersEmptyBox}>
                        <p className={style.usersEmptyText1}>No registered users yet.</p>
                        <p className={style.usersEmptyText2}>Create a new user.</p>
                    </div>
                }

                <AnimatePresence>
                    {
                        filtredUsers = users.filter((user) => searchName
                            ? user.firstName.toLowerCase().includes(searchName.toLowerCase())
                            : user)
                            .map((user) => <User user={user}
                                key={user.id}
                                removeOneUser={removeOneUser}
                                updateUserData={updateUserData}
                            />
                            )
                    }
                </AnimatePresence>

                {(!filtredUsers.length && users.length)
                    ? <motion.div className={style.roResult}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: .1, delay: .3 }}
                    >
                        <p>Not found</p>
                    </motion.div>
                    : null
                }
            </div>

        </div>
    )
}


