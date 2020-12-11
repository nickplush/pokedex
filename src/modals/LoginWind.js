import React, { useState } from 'react'
import {
  Button, CardActions, CardContent, Container, Dialog, FormControl, TextField, Typography, Card
} from '@material-ui/core'
import { authentication } from '../actions/authActions'
import { useDispatch } from 'react-redux'
import { func, string } from 'prop-types'

export const LoginWind = ({
  type,
  close,
  handleOpenRegistration
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleChaneEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChanePassword = (e) => {
    setPassword(e.target.value)
  }

  const sendData = () => {
    dispatch(authentication(email, password))
  }
  return (
    <Dialog open={type === 'login'}>
        <Container maxWidth={'xs'}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Login
              </Typography>
              <div>
                <FormControl fullWidth>
                  <TextField required label="Email" color='secondary' onChange={handleChaneEmail}/>
                  <TextField label="Password" type="password" onChange={handleChanePassword}/>
                </FormControl>
                <CardActions>
                  <Button variant={'outlined'} onClick={sendData}>Login</Button>
                  <Button onClick={handleOpenRegistration}>Registration</Button>
                  <Button onClick={close}>Close</Button>
                </CardActions>
              </div>
            </CardContent>
          </Card>
        </Container>
    </Dialog>
  )
}
LoginWind.propTypes = {
  type: string,
  close: func,
  handleOpenRegistration: func
}
