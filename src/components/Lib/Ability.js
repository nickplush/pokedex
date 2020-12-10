import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import './types.css'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  accord:{
    display:'flex',
    justifyContent:'space-around',
  }
}))

export const Ability = ({ abilities }) => {
  const classes = useStyles()
  const pokeAbility = abilities.map(ability => {
    return (

        <Typography component={'div'}>{ability.ability.name} </Typography>

    )
  })
  return (
    <div className={classes.accord}>
        {pokeAbility}
    </div>
  )
}
