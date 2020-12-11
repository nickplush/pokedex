import React, { useState } from 'react'
import {
  Button, CardActions, CardContent, Container, Dialog, FormControl, TextField, Typography, Card
} from '@material-ui/core'
import { registration } from '../actions/authActions'
import { func, string } from 'prop-types'

export const RegistrationWind = ({ type, close }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChaneEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChanePassword = (e) => {
    setPassword(e.target.value)
  }

  const sendData = () => {
    registration(email, password)
  }
  return (
    <Dialog open={type === 'regist'}>
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
                <Button type={'submit'} variant={'outlined'} onClick={sendData}>Registration</Button>
                <Button onClick={close}>Close</Button>
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Dialog>
  )
}
RegistrationWind.propTypes = {
  type: string,
  close: func
}
