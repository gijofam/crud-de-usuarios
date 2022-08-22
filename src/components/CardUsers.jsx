import axios from 'axios'
import React from 'react'

const CardUsers = ({user, setRefresh,setUpdateUser,activeModal}) => {

  const deleteUser = () => {
    const url = `https://users-crud1.herokuapp.com/users/${user.id}/`
    axios.delete(url)
      .then(res => setRefresh(res.data))
      .catch(err => console.log(err))
  }

  const updateUser = () => {
    setUpdateUser(user)
  }
  return (
    <article className='card'>
        {/* <h2>{`${user['first_name']} ${user['last_name']}`}</h2> */}
        <h2 className='card__title'>{user['first_name']} {user['last_name']}</h2>
        <hr />
        <ul className='card__list'>
            {/* <li><span>Correo: </span><i className='bx bxs-envelope' style='color:#060606'></i>{user.email}</li>
            <li><span>Birthday: </span><i className='bx bxs-cake' style='color:#060606'  ></i>{user.birthday}</li>      
        */}
            <li className='card__item'><span>Correo: </span></li>
            <li className='card__item'><i className='bx bxs-envelope'></i>{user.email}</li>  
            <li className='card__item'><span>Birthday: </span></li>
            <li className='card__item'><i className='bx bxs-cake' ></i>{user.birthday}</li>  
        </ul>
        <footer className='card__footer'>
            <button className='card__footer--delete' onClick={deleteUser}><i className='bx bxs-trash'></i></button>
            <button className='card__footer--update'onClick={ () => {updateUser(); activeModal()}}
            ><i className='bx bxs-pencil'></i></button>      
        </footer>
    </article>
  )
}

export default CardUsers