import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { CreateUserForm } from '../Common/CreateUserForm/CreateUserForm'
import { Modal } from '../Common/Modal/Modal'
import { Loading } from '../Common/Loading/Loading'
import { createOneNewUser } from '../../redux/Reducers/User-Reducer'
import { getUsersPageIsLoading } from '../../redux/Selectors/User-Selector'
import taskIcon from '../../assets/icons/taskIcon.png'
import createUserIcon from '../../assets/icons/createUser.png'
import style from './Header.module.css'


export const Header = () => {

    const [isShowCreateUserModal, setIsShowCreateUserModal] = useState(false)
    const isLoading = useSelector(getUsersPageIsLoading)
    const dispatch = useDispatch()

    const createNewUser = (newUser) => {
        dispatch(createOneNewUser(newUser))
    }

    return (
        <>
            <AnimatePresence>
                {
                    isShowCreateUserModal &&
                    <Modal setIsShow={setIsShowCreateUserModal}>
                        <CreateUserForm setIsShowCreateUserModal={setIsShowCreateUserModal}
                            createNewUser={createNewUser}
                        />
                    </Modal>
                }
            </AnimatePresence>
            <div className={style.container}>
                <div className={style.iconWrapper}>
                    <img src={taskIcon} alt='taskIcon' className={style.taskIcon} />
                </div>

                <div className={style.paragraphWrapper}>
                    {
                        isLoading && <Loading />
                    }
                    <h1 className={style.paragraph}>Create Users</h1>
                    {
                        isLoading && <Loading />
                    }
                </div>

                <div className={style.createUserButtonWrapper} onClick={() => setIsShowCreateUserModal(true)}>
                    <img src={createUserIcon} className={style.createUserIcon} alt='taskIcon' />
                </div>
            </div>
        </>
    )
}

