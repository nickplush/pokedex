import React from 'react'
import { Button, Dialog, DialogContent, Grid, Typography,
} from '@material-ui/core'

export const PokemonInfo = ({
  open,
  close,
  data,
  classes
}) => {
  return (
    <Dialog open={open}>
      <DialogContent dividers className={classes.dialog}>
        <Grid container spacing={12}>
          <Grid item spacing={6}>
            <div className={classes.icon}>
              <img src={data.sprites.front_default}/>
            </div>
            <div className={classes.icon}>
              <img src={data.sprites.back_default}/>
            </div>
          </Grid>
          <Grid spacing={6}>
            <div className={classes.infoConteiner}>
              <Typography variant={'h7'}>№:{data.id}</Typography>
              <Typography variant={'h5'}>Name: {data.name}</Typography>
              <Typography>weight: {data.weight} </Typography>
            </div>
          </Grid>
        </Grid>
        <Button variant="contained" className={classes.button} onClick={close} >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}

