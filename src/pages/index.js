import React from 'react'
import Abouts from '../components/Abouts'
import Animals from '../components/Animals'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'
import SEO from '../components/seo'
import Volunteers from '../components/Volunteer'
// import Image from '../components/image'
// import IntersectionObserverAnimation from '../components/Animations/IntersectionObserverAnimation'

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Banner fetchID="1" />
      <Abouts />
      <Volunteers />
      <Banner fetchID="2" navID="AnimalsInNeed-Section" />
      <Newsletter />
      <Banner fetchID="3" />
      <Animals />
    </>
  )
}

export default IndexPage

