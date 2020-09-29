import React from 'react'
// import { Router } from "@reach/router"
// import { Link } from 'gatsby'
import { Wrapper } from '../components/page-elements'
// import IndexDefault from '../components/IndexDefault'
// import IndexPrams from '../components/IndexPrams'
import Image from '../components/image'
import AppComponent from '../components/AppComponent/AppComponent'
import SEO from '../components/seo'
import IntersectionObserverAnimation from '../components/Animations/IntersectionObserverAnimation'

//  <Router Router basepath="/" >
// <IndexDefault path="/" />
// <IndexPrams path="/:urlParam" />
// </Router > 


const IndexPage = () => {
  const Customvariants1 = {
    start: {
      x: 500,
      opacity: 0
    },
    end: {
      x: 0,
      opacity: 1
    }
  };
  const Customvariants2 = {
    start: {
      fontSize: "1rem",
    },
    end: {
      fontSize: "3rem",
      color: "red",
      textTransform: "uppercase",
    }
  };
  return (
    <>
      <SEO title="Home" />
      <Wrapper>
        <AppComponent />
        <h1 >Welcome to your new Gatsby site.</h1>
        <div style={{ height: '150vh', outline: '1px dotted red' }}></div>
        <IntersectionObserverAnimation rootMarginBotton="-100px" Customvariants={Customvariants1} triggerOnce={true} >
          <span>section 1</span>
        </IntersectionObserverAnimation>

        <div style={{ height: '50vh', outline: '1px dotted red' }}></div>
        <IntersectionObserverAnimation rootMarginBotton="-100px" Customvariants={Customvariants2} >
          <span>section 2</span>
        </IntersectionObserverAnimation>

        <div style={{ height: '50vh', outline: '1px dotted red' }}></div>
        <IntersectionObserverAnimation rootMarginBotton="-100px" Customvariants={Customvariants1} triggerOnce={true} >
          <span>section 3</span>
          <Image />
          <p>Now go build something great.</p>
        </IntersectionObserverAnimation>
      </Wrapper>

    </>
  )
}

export default IndexPage


