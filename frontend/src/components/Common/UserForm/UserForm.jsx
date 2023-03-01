import { useForm } from 'react-hook-form'
import { Button } from '../Button/Button'
import { Input } from '../FormsControls/Input'
import style from './UserForm.module.css'

export const UserForm = ({ onSubmit, buttonName = 'create', buttonBlueStyle = false, defultValues }) => {


    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ mode: "all", defaultValues: { ...defultValues } })

    return (
        <div className={style.formContainer}>
            <form onSubmit={handleSubmit((e) => onSubmit(e, reset))} className={style.userForm}>
                <Input id='firstName'
                    label='Your FirstName'
                    watch={watch}
                    register={register}
                    registerName='firstName'
                    errors={errors.firstName}
                    maxLengthMessage="Maximum` 15 symbols"
                    maxLengthValue={15}
                    requiredMessage='FirstName is required'
                    isRequired={true}
                />
                <Input id='lastName'
                    label='Your LastName'
                    watch={watch}
                    register={register}
                    registerName='lastName'
                    errors={errors.lastName}
                    maxLengthMessage="Maximum` 25 symbols"
                    maxLengthValue={25}
                    requiredMessage='LastName is required'
                    isRequired={true}
                />
                <Input id='age'
                    label='Your Age'
                    watch={watch}
                    register={register}
                    registerName='age'
                    errors={errors.age}
                    maxLengthMessage="Maximum` 2 symbols"
                    maxLengthValue={2}
                    requiredMessage='Age is required'
                    isRequired={true}
                    regExp={/^[0-9]+$/}
                    regExpMessage='Please enter a number'
                />

                <Input id='email'
                    label='Your Email'
                    watch={watch}
                    register={register}
                    registerName='email'
                    errors={errors.email}
                    maxLengthMessage="Maximum` 40 symbols"
                    maxLengthValue={40}
                    requiredMessage='Email is required'
                    isRequired={true}
                    regExp={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
                    regExpMessage='Please enter valid email'
                />

                <Input id='address'
                    label='Your Address'
                    watch={watch}
                    register={register}
                    registerName='address'
                    errors={errors.address}
                    maxLengthMessage="Maximum` 30 symbols"
                    maxLengthValue={30}
                    requiredMessage='Address is required'
                    isRequired={true}
                />
                <div className={style.submitButtonWrapper}>
                    <Button name={buttonName} width='150px' buttonBlueStyle={buttonBlueStyle} />
                </div>
            </form>
        </div>
    )
}

