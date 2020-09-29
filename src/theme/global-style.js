import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { breakpoints } from '../theme/breakpoints'

export const theme = {
  colour: {
    black: '#000',
    white: '#fff',
    grey: {
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c',
    },
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  spacing: {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --theme-border: 1px solid #d8d8d8;
    --small-padding: 1rem;
    --section-padding: 1rem 0; 
    --theme-color: #0e6998;
    --theme-background-color: #e2edff;
    --wrapper-max-size: 1000px;
    --link-color: #afadba;


    --text-color: black;
    --menu-text-color: black;
    --background-color: white;
    --header-background-color: transparent;
    --menu-icon-size: 2rem;
  }

  [data-theme="dark"] {
    --theme-color: green;
    --text-color: white;
    --menu-text-color: black;
    --background-color: black;
    --header-background-color: rgba(255,255,255, .95);
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
    grid-gap: 1rem;
    @media ${breakpoints.md} {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }
  }

  .sub-title {
    font-size: 2rem;
    grid-column: 1/-1;
    color: var(--theme-color);
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
