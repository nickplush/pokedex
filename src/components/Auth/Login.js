import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { LoginWind } from '../../modals/LoginWind'
import { RegistrationWind } from './RegistrationWin'

export const Login = () => {
  const [typeModal, setTypeModal] = useState(null)

  const handleOpenLogin = () => {
    setTypeModal('login')
  }
  const handleOpenRegistration = () => {
    setTypeModal('regist')
  }
  const handleClose = () => {
    setTypeModal(null)
  }
  return(
    <div>
    <Button onClick={handleOpenLogin}>Log in</Button>
    <LoginWind type={typeModal} close={handleClose} handleOpenRegistration={handleOpenRegistration}/>
    <RegistrationWind type={typeModal} close={handleClose}/>
    </div>
  )
}
