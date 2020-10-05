import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { breakpoints } from '../theme/breakpoints'

export const theme = {
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --link-color-blue: #007cff;
    --theme-border: 1px solid #d8d8d8;
    --small-padding: 1rem;
    --section-padding: 1rem 0; 
    --theme-color: #0e6998;
    --theme-background-color: #e2edff;
    --wrapper-max-size: 1000px;
    --link-color: #afadba;
    --header-background-color: rgba(255,255,255, .5);
    --text-color: black;
    --menu-text-color: black;
    --background-color: white;
    --menu-icon-size: 2rem;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-x: hidden;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
  }

  img {
    display: block;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .wrapper {
    width: 90%;
    max-width: var(--wrapper-max-size);
    margin: 0 auto;
  }

  .grid3column {
    display: grid;
    grid-column-gap: 1rem;
    @media ${breakpoints.md} {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
    }
  }

  .sub-title {
    font-weight: bold;
    font-size: 2rem;
    grid-column: 1/-1;
    color: var(--theme-color);
    margin-bottom: 1.5rem;
    :first-letter {
      text-transform: uppercase;
    }
  }

  .ReactModal__Overlay{
    z-index:5000;
  }

  #gatsby-focus-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    main {

    }
  }
`
