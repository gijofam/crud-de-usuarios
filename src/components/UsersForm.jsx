// import axios,{useEffect} from 'axios'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValue = {
  firs_name: '',
  last_name: '',
  email: '',
  password: '',
  birthday: '',
}
const UsersForm = ({setRefresh,updateUser,setUpdateUser, activeModal}) => {
    // instaceamos el useForm
    const {register,handleSubmit, reset} = useForm()
    
    useEffect(() => {
      if(updateUser) reset(updateUser)
    
    }, [updateUser])
    
    const createUser = (data) => {
      const url = 'https://users-crud1.herokuapp.com/users/'
      axios.post(url,data)
        .then(res => setRefresh(res.data))
        .catch(err => console.log(err))
    }

    const updateUserInfo = (data) =>{
      const url = `https://users-crud1.herokuapp.com/users/${updateUser.id}/`
      axios.patch(url,data)
      .then(res => setRefresh(res.data))
      .catch(err => console.log(err))

    }
    const submit = (data) =>{

      if(updateUser){
        // aqui AGREGUEEEEEEEEEEEE
        // activeModal()
        updateUserInfo(data)
        setUpdateUser()

      }else{
        createUser(data)
      }
      reset(defaultValue)
    }
  return (
    <form className='card-form' onSubmit={handleSubmit(submit)}>
      <div className='card-form__close' onClick={activeModal}>X</div>
        <div className='card-form__first_name'>
          <label htmlFor="first_name">Nombre: </label>
          <input type="text" id='first_name' placeholder='nombre' {...register('first_name')}/>
        </div>
        <div className='card-form__last_name'>
          <label htmlFor="last_name">Apellido: </label>
          <input type="text" id='last_name' placeholder='apellido' {...register('last_name')}/>
        </div>
        <div className='card-form__email'>
          <label htmlFor="email">Correo: </label>
          <input type="email" id='email' placeholder='email' {...register('email')}/>
        </div>
        <div className='card-form__password'>
          <label htmlFor="password">Contraseña: </label>
          <input type="password" id='password' placeholder='contraseña' {...register('password')}/>
        </div>
        <div className='card-form__birthday'>
          <label htmlFor="birthday">Cumpleaños: </label>
          <input type="date" id='birthday' placeholder='cumpleaños' {...register('birthday')}/>
        </div>
        <button onClick={activeModal} className='card-form__btn'> {updateUser ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default UsersForm