import React from 'react'
import {
  Button, Card, CardContent, CardHeader, CardMedia
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Types } from './Types'

const TableCard = ({ data, classes }) => {
  return (
    <Grid item xs={2}>
      <Card>
        <Paper className={classes.label}>
          <CardHeader title={data.data.name}/>
          <CardMedia
            className={classes.media}
            image={data.data.sprites.front_default}
            title="lorem ipsum"
          />
          <CardContent>
            <Types types={data.data.types}/>
            <Button color="secondary">Learn more</Button>
          </CardContent>
        </Paper>
      </Card>
    </Grid>

  )
}

export default TableCard
