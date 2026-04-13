import React from 'react'
import Collapse from '../components/Collapse/Collapse'
import Header from '../components/Header/Header'

function AboutPage() {
  const collapseJSON = [
    {
      id: 1,
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: 2,
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 3,
      title: "Service",
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 4,
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.",
    }
  ]
  return (
    <>
    <Header variant="about"/>
      {collapseJSON.map((item) => (
        <Collapse
        key = {item.id}
        title = {item.title}
        content = {item.content}
      />
      ))}
    </>
  )
}

export default AboutPage