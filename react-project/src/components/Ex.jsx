import React from 'react'
import { Ex2 } from './Ex2'

export const Ex = (props) => {
  return (
    <>
    <div>
        Example {props.name}
        </div>
        <Ex2 user={props.name}/>
    </>
  )
}

