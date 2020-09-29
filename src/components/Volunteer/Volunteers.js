import React from 'react'
import styled from 'styled-components'
const StyledVolunteersSection = styled.section`
    background-color: var(--theme-background-color);
    div {
        padding: var(--section-padding);
        article {
            border: var(--theme-border);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            header, footer {
                padding: var(--small-padding);
                min-height: 1rem;
                background-color: #f7f7f7;
            }
            header {
                border-bottom: var(--theme-border);
            }
            main {
                padding: var(--small-padding);
                > :last-child {
                    margin-top: var(--small-padding);
                }
                img {
                    min-height: 180px;
                    object-fit: cover;
                }
            }
            footer {
                color: grey;
                font-style: italic;
                font-weight: bold;
                border-top: var(--theme-border);
            }
    }
}
`

const Volunteers = () => {
    return (
        <StyledVolunteersSection >
            <div className="wrapper grid3column">
                <h2 className="sub-title">Bliv Frivillig</h2>
                {VolunteerssData.map((element) => {
                    return (
                        <VolunteersItem key={element.id} title={element.title} content={element.content} extra={element.extra} img={element.asset.url} />
                    )
                })}
            </div>
        </StyledVolunteersSection>
    )
}

export default Volunteers


const VolunteersItem = ({ title, content, extra, img }) => {
    return (
        <article>
            <header><h3>{title}</h3></header>
            <main>
                <img src={img} alt={title} />
                <p>{content}</p>
            </main>
            <footer>{extra}</footer>
        </article>
    )
}


const VolunteerssData = [
    {
        "id": 1,
        "title": "Dyreredder",
        "content": "En central del af foreningens arbejde med dyreredning udføres af dyreredningsbilen, som hovedsageligt køres af frivillige. Bilen assisterer med hjælp til nædstedte dyr og i sager, hvor henvender ikke selv har mulighed for at bringe dyret til nærmeste dyrlæge eller vildtplejestation.",
        "extra": "OBS: Vi har været så heldige at få rigtig mange ansøgninger og har derfor midlertidigt lukket for nye.",
        "createdAt": "2020-05-17T19:45:02.776Z",
        "updatedAt": "2020-05-17T19:45:02.776Z",
        "assetId": 15,
        "asset": {
            "id": 15,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743676167volunteer.jpg",
            "createdAt": "2020-05-17T19:27:56.167Z",
            "updatedAt": "2020-09-29T10:40:57.882Z"
        }
    },
    {
        "id": 2,
        "title": "Kredsformand",
        "content": "For at være frivillig i Dyrenes Beskyttelse kræver det, at du har et stort engagement og viden om dyr og dyrevelfærd. Du skal have en god vurderingsevne og kunne indgå i dialog. Derudover skal du være klar til at afse en del af din fritid på at arbejde med lokale dyreværnssager. I oplæringstiden vil din tilel være kredsassistent, hvor du vil blive støttet af nærmeste kredsformand i dit arbejde. Herefter får du mulighed for selv at blive kredsformand.",
        "extra": "",
        "createdAt": "2020-05-17T19:48:13.430Z",
        "updatedAt": "2020-05-17T19:48:13.430Z",
        "assetId": 14,
        "asset": {
            "id": 14,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743672248leading.jpg",
            "createdAt": "2020-05-17T19:27:52.249Z",
            "updatedAt": "2020-09-29T10:40:34.031Z"
        }
    },
    {
        "id": 3,
        "title": "Bliv internatfrivillig",
        "content": "Hverdagen på vores otte internater er travl, og opgaverne står i kø. Derfor er vi taknemmelige for, at der er mennesker, som har lyst til at donere deres tid til at gøre en forskel for dyrene som frivillig eller plejefamilie. Vores internater har ofte brug for hjælp til at passe killinger, hunde, eller andet. Ligesom der også kan være brug for hundeluftere og anden hjælp på internatet.",
        "extra": "",
        "createdAt": "2020-05-17T19:50:35.049Z",
        "updatedAt": "2020-05-17T19:50:35.049Z",
        "assetId": 13,
        "asset": {
            "id": 13,
            "url": "https://dyrevelfaerd.herokuapp.com/file-bucket/1589743668268internat.jpg",
            "createdAt": "2020-05-17T19:27:48.268Z",
            "updatedAt": "2020-09-29T10:40:14.510Z"
        }
    }
]