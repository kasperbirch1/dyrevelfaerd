import React from 'react'
import Abouts from '../components/Abouts/Abouts'
import Animals from '../components/Animals/Animals'
import Banner from '../components/Banner/Banner'
import Newsletter from '../components/Newsletter/Newsletter'
import SEO from '../components/seo'
import Volunteers from '../components/Volunteer/Volunteers'
// import { Router } from "@reach/router"
// import { Link } from 'gatsby'
// import { Wrapper } from '../components/page-elements'
// import IndexDefault from '../components/IndexDefault'
// import IndexPrams from '../components/IndexPrams'
// import Image from '../components/image'
// import IntersectionObserverAnimation from '../components/Animations/IntersectionObserverAnimation'

//  <Router Router basepath="/" >
// <IndexDefault path="/" />
// <IndexPrams path="/:urlParam" />
// </Router > 


const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Banner img={adoptsectionsData[0].asset.url} title={adoptsectionsData[0].title} content={adoptsectionsData[0].content} />
      <Abouts />
      <Volunteers />
      <Banner img={adoptsectionsData[1].asset.url} title={adoptsectionsData[1].title} content={adoptsectionsData[1].content} />
      <Newsletter />
      <Banner img={adoptsectionsData[2].asset.url} title={adoptsectionsData[2].title} content={adoptsectionsData[2].content} />
      <Animals />
    </>
  )
}

export default IndexPage


const adoptsectionsData = [
  {
    "id": 1,
    "title": "Foreningen for Dyrevelfærd",
    "content": "Vi specialicerer os i dyrevelfærd",
    "createdAt": "2020-05-17T19:29:42.551Z",
    "updatedAt": "2020-05-17T19:29:42.551Z",
    "assetId": 11,
    "asset": {
      "id": 11,
      "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743651917kittens.jpg",
      "createdAt": "2020-05-17T19:27:31.918Z",
      "updatedAt": "2020-09-29T10:39:29.738Z"
    }
  },
  {
    "id": 2,
    "title": "Står du med et dyr i nød?",
    "content": "Ring til dyrernes vagtcentral på 1812 og få råd til hjælp og håndtering af dyr",
    "createdAt": "2020-05-17T19:30:56.915Z",
    "updatedAt": "2020-05-17T19:30:56.915Z",
    "assetId": 12,
    "asset": {
      "id": 12,
      "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743660929save.jpg",
      "createdAt": "2020-05-17T19:27:40.930Z",
      "updatedAt": "2020-09-29T10:39:56.213Z"
    }
  },
  {
    "id": 3,
    "title": "Adopter et dyr",
    "content": "Overvejer du et nyt medlem af familien? Måske du er det perfekte match til et af vores mange svigtede internatdyr, som venter på nye kærlige hjem.",
    "createdAt": "2020-05-17T19:32:51.883Z",
    "updatedAt": "2020-05-17T19:32:51.883Z",
    "assetId": 1,
    "asset": {
      "id": 1,
      "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743589738adopt.jpg",
      "createdAt": "2020-05-17T19:26:29.739Z",
      "updatedAt": "2020-09-29T10:33:35.464Z"
    }
  }
]