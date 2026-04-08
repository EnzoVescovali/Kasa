import React from 'react'
import './Error.css'
import { NavLink } from 'react-router'

function Error() {
  return (
    <div className='errorPage'>
      <h1 className='errorTitle'>404</h1>
      <p className='errorTxt'>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="errorLink">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  )
}

export default Error