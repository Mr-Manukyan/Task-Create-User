import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BsTrash } from 'react-icons/bs'
import { BsPencilSquare } from 'react-icons/bs'
import { Modal } from '../../Common/Modal/Modal'
import { dateFormatter } from '../../../helpers/helpers'
import style from './User.module.css'
import { UserForm } from '../../Common/UserForm/UserForm'


export const User = ({ user, removeOneUser, updateUserData }) => {

    const [isShowModalForm, setIsShowModalForm] = useState(false)

    const dateFormatted = dateFormatter(user.date)

    const onSubmit = (data) => {
        updateUserData(data)
        setIsShowModalForm(false)
    }

    return (
        <>
            <AnimatePresence>
                {
                    isShowModalForm &&
                    <Modal setIsShow={setIsShowModalForm}>
                        <div className={style.fromContainer}>
                            <div className={style.paragraphWrapper}>
                                <p className={style.paragraph}>Update Your Data</p>
                            </div>
                            <UserForm onSubmit={onSubmit}
                                buttonName='update'
                                buttonBlueStyle
                                defultValues={user}

                            />
                        </div>
                    </Modal>
                }
            </AnimatePresence>

            <motion.div className={style.container}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: .3 }}
                layoutId={user.id}
            >
                <div className={style.userBody}>
                    <p className={style.firstName}><span>{'FirstName : '}</span>{user.firstName}</p>
                    <p className={style.lastName}><span>{'LastName : '}</span>{user.lastName}</p>
                    <p className={style.email}><span>{'Email : '}</span>{user.email}</p>
                    <p className={style.userAddress}><span>{'Address : '}</span>{user.address}</p>
                    <p className={style.userAge}><span>{'Age : '}</span>{user.age}</p>
                    <p className={style.userDate}><span>{'Date : '}</span>{dateFormatted}</p>
                </div>
                <div className={style.editorBody}>
                    <BsPencilSquare className={style.updateIcon} onClick={() => setIsShowModalForm(true)} />
                    <BsTrash className={style.removeIcon} onClick={() => removeOneUser(user.id)} />
                </div>
            </motion.div>
        </>
    )
}

