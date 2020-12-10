import React from 'react'
import './types.css'

import classnames from 'classnames'
import { Typography } from '@material-ui/core'

export const Types = ({ types }) => {
  const pokeType = types.map(type => {
    return (
      <div key={Math.random()}>
        <Typography className={classnames(type.type.name, 'normal')} component={'div'}>{type.type.name}</Typography>
      </div>
    )
  })
  return (
    <div className={'conteiner'}>
      {pokeType}
    </div>
  )
}
