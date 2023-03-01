import { v4 as uniqueID } from 'uuid'
import { UserForm } from '../UserForm/UserForm'
import style from './CreateUserForm.module.css'


export const CreateUserForm = ({ setIsShowCreateUserModal, createNewUser }) => {

    const onSubmit = (data, reset) => {
        createNewUser({
            ...data,
            id: uniqueID(),
            date: Date.now()
        })
        setIsShowCreateUserModal(false)
        reset()

    }

    return (

        <div className={style.container}>
            <div className={style.paragraphWrapper}>
                <p className={style.paragraph}>Create User</p>
            </div>
            <UserForm onSubmit={onSubmit} />
        </div>
    )

}

