import React from 'react'
import { useParams } from 'react-router'
import data from "../data/Data.json"
import Error from './Error'

function Logement() {
    const {id} = useParams()
    const logement = data.find((data)=> data.id === id)
    console.log(logement);
    if(logement === undefined) return (<Error/>)
  return (
    <>
        <div>Logement</div>
        <h2> {id} </h2>
    </>
    
  )
}

export default Logement