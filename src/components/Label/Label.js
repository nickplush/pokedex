import React from 'react'
import { Button, Typography } from '@material-ui/core'

const Label = () => {
  return (
  <div>
    <Typography variant="h3">This is the Pokemon library</Typography>
    <Button href='/api/lib'>forward to the pokemon!</Button>
  </div>
  )
}
export default Label
