import React from 'react'
import styled from 'styled-components'
const StyledAboutsSection = styled.section`
    padding: var(--section-padding);
    article {
        padding: 1rem;
        > :first-child {
            text-transform: uppercase;
            font-weight: bold;
            color: var(--theme-color);
            margin-bottom: .5rem;
        }
       
    }
`

const Abouts = () => {
    return (
        <StyledAboutsSection className="wrapper grid3column">
            {dummydata.map(element => {
                return (
                    <AboutItem key={element.id} title={element.title} content={element.content} />
                )
            })}

        </StyledAboutsSection>
    )
}

export default Abouts


const AboutItem = ({ title, content }) => {
    return (
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
        </article>
    )
}




const dummydata = [
    {
        "id": 1,
        "title": "Om os",
        "content": "Vi kæmper for at nedbringe antallet af dyr i nød og sikre, at alle nedstødte dyr får den rette hjælp. Vi arbejder med et landsdækkende netværk af frivillige, internater og plejestationer, der hver dag hjælper dyr.",
        "createdAt": "2020-05-17T19:34:13.009Z",
        "updatedAt": "2020-05-17T19:34:13.009Z"
    },
    {
        "id": 2,
        "title": "Dyr & mennesker",
        "content": "Vi arbejder for at øge respekten for dyr i samfundet og synliggøre deres unikke værdi for mennesker. Dyr skaber tryghed, styrker sociale relationer og sikrer en aktiv hverdag for deres ejere.\n\nMed dyr følger ansvar, derfor arbejder vi proaktivt med oplysning om ansvarligt ejerskab, så hverken dyr eller mennesker kommer i klemme i en dyreværnssag. Bag hver femte sag står en ulykkelig menneskeskæbne, som med den rette hjælp og vejledning måske kunne være undgået.",
        "createdAt": "2020-05-17T19:37:04.743Z",
        "updatedAt": "2020-05-17T19:37:04.743Z"
    },
    {
        "id": 3,
        "title": "Mad & forbrug",
        "content": "Vi kæmper for en mere naturlig fødevareproduktion og en bæredygtig madkultur med fokus på kvalitet, omtanke og respekt for dyr og natur. Det er vores mål, at hele Danmarks fødevareproduktion bliver omlagt til enten friland eller økologi og at danskernes forbrug af kød-, æg- og mejeriprodukter i DK falder.\n\nDansk fødevareproduktion  er drevet af et ensidigt fokus på vækst, økonomi og lave omkostninger. I dag er 99% af landbrugene intensiv storproduktion med store konsekvenser  for dyrene som følge. De bliver behandlet som produktionsenheder - ikke som væsener. Det betyder, at millioner af dyr i Danmark lever under stærkt kritisable forhold.",
        "createdAt": "2020-05-17T19:41:32.628Z",
        "updatedAt": "2020-05-17T19:41:32.628Z"
    }
]