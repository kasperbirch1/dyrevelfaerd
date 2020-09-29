import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../theme/breakpoints'
const StyledAnimalsSection = styled.section`
    padding: var(--section-padding);
    display: grid;
    grid-gap: 1rem;
    @media ${breakpoints.md} {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }
   article {
       border: var(--theme-border);
       display: flex;
       img {
           object-fit: cover;
           max-width: 200px;
       }
       div {
           padding: var(--small-padding);
       }
   }
`

const Animals = () => {
    return (
        <StyledAnimalsSection className="wrapper">
            <h2 className="sub-title">Dyr hos os</h2>
            {animalsData.map((element) => {
                return (
                    <AnimalItem key={element.id} name={element.name} description={element.description} img={element.asset.url} />
                )
            })}
        </StyledAnimalsSection>
    )
}

export default Animals

const AnimalItem = ({ name, description, img }) => {
    return (
        <article>
            <img src={img} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </article>
    )
}

const animalsData = [
    {
        "id": 1,
        "name": "Amina",
        "description": "Doggo ipsum length boy long water shoob length boy what a nice floof shoober, shooberino smol borking doggo with a long snoot for pats. Fluffer snoot doggorino you are doin me a concern you are doing me a frighten, shooberino very good spot floofs.",
        "age": 10,
        "createdAt": "2020-05-17T19:53:05.492Z",
        "updatedAt": "2020-05-17T19:53:05.492Z",
        "assetId": 2,
        "asset": {
            "id": 2,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743602933carla.jpg",
            "createdAt": "2020-05-17T19:26:36.507Z",
            "updatedAt": "2020-09-29T10:34:30.932Z"
        }
    },
    {
        "id": 2,
        "name": "Carla",
        "description": "Doggo ipsum length boy long water shoob length boy what a nice floof shoober, shooberino smol borking doggo with a long snoot for pats. Fluffer snoot doggorino you are doin me a concern you are doing me a frighten, shooberino very good spot floofs.",
        "age": 15,
        "createdAt": "2020-05-17T19:53:31.486Z",
        "updatedAt": "2020-05-17T19:53:31.486Z",
        "assetId": 3,
        "asset": {
            "id": 3,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743606893flotfyr.jpeg",
            "createdAt": "2020-05-17T19:26:42.934Z",
            "updatedAt": "2020-09-29T10:34:53.953Z"
        }
    },
    {
        "id": 3,
        "name": "Flot Fyr",
        "description": "Doggo ipsum length boy long water shoob length boy what a nice floof shoober, shooberino smol borking doggo with a long snoot for pats. Fluffer snoot doggorino you are doin me a concern you are doing me a frighten, shooberino very good spot floofs.",
        "age": 60,
        "createdAt": "2020-05-17T19:53:51.713Z",
        "updatedAt": "2020-05-17T19:53:51.713Z",
        "assetId": 4,
        "asset": {
            "id": 4,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743606893flotfyr.jpeg",
            "createdAt": "2020-05-17T19:26:46.894Z",
            "updatedAt": "2020-09-29T10:35:29.207Z"
        }
    },
    {
        "id": 4,
        "name": "Frida",
        "description": "Doggo ipsum length boy long water shoob length boy what a nice floof shoober, shooberino smol borking doggo with a long snoot for pats. Fluffer snoot doggorino you are doin me a concern you are doing me a frighten, shooberino very good spot floofs.",
        "age": 24,
        "createdAt": "2020-05-17T19:54:15.743Z",
        "updatedAt": "2020-05-17T19:54:15.743Z",
        "assetId": 5,
        "asset": {
            "id": 5,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743612191frida.jpeg",
            "createdAt": "2020-05-17T19:26:52.191Z",
            "updatedAt": "2020-09-29T10:35:56.132Z"
        }
    },
    {
        "id": 5,
        "name": "Pava",
        "description": "Doggo ipsum length boy long water shoob length boy what a nice floof shoober, shooberino smol borking doggo with a long snoot for pats. Fluffer snoot doggorino you are doin me a concern you are doing me a frighten, shooberino very good spot floofs.",
        "age": 10,
        "createdAt": "2020-05-17T19:54:42.340Z",
        "updatedAt": "2020-05-17T19:54:42.340Z",
        "assetId": 6,
        "asset": {
            "id": 6,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743618350pava.jpeg",
            "createdAt": "2020-05-17T19:26:58.351Z",
            "updatedAt": "2020-09-29T10:36:25.984Z"
        }
    },
    {
        "id": 6,
        "name": "Pia",
        "description": "Doggo ipsum length boy long water shoob length boy what a nice floof shoober, shooberino smol borking doggo with a long snoot for pats. Fluffer snoot doggorino you are doin me a concern you are doing me a frighten, shooberino very good spot floofs.",
        "age": 10,
        "createdAt": "2020-05-17T19:55:02.781Z",
        "updatedAt": "2020-05-17T19:55:02.781Z",
        "assetId": 7,
        "asset": {
            "id": 7,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743622345pia.jpg",
            "createdAt": "2020-05-17T19:27:02.346Z",
            "updatedAt": "2020-09-29T10:37:10.394Z"
        }
    },
    {
        "id": 7,
        "name": "Polly",
        "description": "Doggo ipsum length boy long water shoob length boy what a nice floof shoober, shooberino smol borking doggo with a long snoot for pats. Fluffer snoot doggorino you are doin me a concern you are doing me a frighten, shooberino very good spot floofs.",
        "age": 3,
        "createdAt": "2020-05-17T19:55:24.194Z",
        "updatedAt": "2020-05-17T19:55:24.194Z",
        "assetId": 8,
        "asset": {
            "id": 8,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743626930polly.jpg",
            "createdAt": "2020-05-17T19:27:06.930Z",
            "updatedAt": "2020-09-29T10:37:56.394Z"
        }
    },
    {
        "id": 8,
        "name": "Primula",
        "description": "Doggo ipsum length boy long water shoob length boy what a nice floof shoober, shooberino smol borking doggo with a long snoot for pats. Fluffer snoot doggorino you are doin me a concern you are doing me a frighten, shooberino very good spot floofs.",
        "age": 16,
        "createdAt": "2020-05-17T19:55:46.860Z",
        "updatedAt": "2020-05-17T19:55:46.860Z",
        "assetId": 9,
        "asset": {
            "id": 9,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743632335primula.jpg",
            "createdAt": "2020-05-17T19:27:12.335Z",
            "updatedAt": "2020-09-29T10:38:27.465Z"
        }
    },
    {
        "id": 9,
        "name": "Tristan",
        "description": "Doggo ipsum length boy long water shoob length boy what a nice floof shoober, shooberino smol borking doggo with a long snoot for pats. Fluffer snoot doggorino you are doin me a concern you are doing me a frighten, shooberino very good spot floofs.",
        "age": 20,
        "createdAt": "2020-05-17T19:56:10.722Z",
        "updatedAt": "2020-05-17T19:56:10.722Z",
        "assetId": 10,
        "asset": {
            "id": 10,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743636008tristan.jpg",
            "createdAt": "2020-05-17T19:27:16.008Z",
            "updatedAt": "2020-09-29T10:39:01.166Z"
        }
    }
]