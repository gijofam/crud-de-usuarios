import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import CardUsers from './components/CardUsers'
import UsersForm from './components/UsersForm'

function App() {
  const [users, setUsers] = useState()
  //este estado permite renderizar cada vez que hagamos un POST, DELETE O PATCH
  const [refresh, setRefresh] = useState()
  //este estado se utiliza para pasar informacion de hermano a hermano
  // es decir del componente CardUsers al componente UsersForm
  const [updateUser, setUpdateUser] = useState()
  // estado para activar el modal
  const [modal, setModal] = useState(false)
 
  useEffect(() => {
    const url = 'https://users-crud1.herokuapp.com/users/'
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [refresh])

  // console.log(users)
  // console.log(updateUser);
  console.log(modal);
  const activeModal = () => {
    setModal(!modal)
  }
  return (
    <div className="App">
      <div className='header'>
        <h1 className='header__title'>Lista de Usuarios</h1>
        <button className='header__btn' onClick={activeModal}><i className='bx bxs-file-plus'></i>Create New User</button>
      </div>
      <hr className="app_hr"/>
      <div className={modal ? 'form-container' : 'form-container--none'} >
        <UsersForm setRefresh={setRefresh} updateUser = {updateUser} setUpdateUser={setUpdateUser} activeModal={activeModal} modal={modal}/>
      </div>
      <div className='card-container'>
        {
          users?.map((user) => (
            <CardUsers user={user} key={user.id} setRefresh={setRefresh} setUpdateUser = {setUpdateUser} activeModal={activeModal} />
          ))
        }
      </div>
    </div>
  )
}

export default App
