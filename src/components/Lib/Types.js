import React from 'react'

export const Types = ({ types }) => {
  if (types.length > 1) {
    return <div>{types[0].type.name}/{types[1].type.name}</div>
  }
  return <div>{types[0].type.name}</div>
}
