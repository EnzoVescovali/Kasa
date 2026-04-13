import React from 'react'
import Header from "../components/Header/Header";
import CardsContainer from '../components/CardsComponent/CardsComponent';


function HomePage() {
  return (
    <>
      <Header variant="home" title="Chez vous, partout et ailleurs"/>
      <CardsContainer/>
    </>
  )
}

export default HomePage