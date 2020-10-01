# Projektdokumentation
### Navn: Kasper Aleksander Birch
#### Holdnr: WUHF02<br>Uddannelse: Webudvikler<br>Uddannelsessted: Roskilde Tekniske Skole
<img alt="Project" src="https://cdn2.hubspot.net/hubfs/4463562/Good-Projects-Digital-Marketing-2.jpg" width="100%" />
<a href="https://www.google.com" target="_blank">URL til site</a>
<br>
<a href="https://www.google.com" target="_blank">URL til login</a>

> Brugernavn: xxxx<br>Adgangskode: xxxx



## Applikation teknologi
Gatsby, React, Styled-Components, Netlify, Heroku

## Dagbog (vurdering af egen indsats + gennemførelse af opgaveforløbet)
1. Dag<br>
Første dag er gået godt, jeg har læst opgaven igemmen, hostet til Heroku, opsat gatsby med min tempalate, og lavet næsten alle components inklusv css til frontpage

1. Dag<br>
idag har jeg skiftet placeholder-data ud med data der kommer fra api ved at lave mit eget react-hook (useApi.js), details site, login fomular der videre sender mig til en anden fumular der kan tilføje et nyt dyr, lavet slider med link til details

1. Dag<br>
hej dag 3

1. Dag<br>
hej dag 4

1. Dag<br>
hej dag 5



## Tredjeparts plugins
#### Flickity
> Jeg har brugt flickity til at lave en carusel
#### Swiper
> Jeg har brugt Swiper til at lave en carusel

## Argumentation for valg af løsninger
Test test 

## Beskrivelse af særlige punkter til bedømmelse
I filen FILENAME demonstrere jeg at jeg kan bruge de 2 vigtigste react hooks useState og useEffect. 

```
import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import axios from 'axios';
import styled from 'styled-components'
const StyledAppPramsSection = styled.section`

`

const AppPrams = ({ urlParam }) => {
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSinglePost = async () => {
            try {
                setLoading(true);
                setError(null)
                let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${urlParam}`);
                setPerson(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setPerson(null)
                setError(error)
            }
        }
        fetchSinglePost()
    }, [urlParam])

    console.log("error LOG", error)

    // console.log("urlParam", urlParam);
    // console.log("person", person);
    return (
        <StyledAppPramsSection>
            <h2>Find data with prams</h2>
            {loading ?
                <h2>Loading...</h2>
                :
                person && <pre>{JSON.stringify(person, null, 2)}</pre>
            }
            {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
            <Link to="/app/1" >Link to app1</Link>
            <Link to="/app/2" >Link to app2</Link>
        </StyledAppPramsSection>
    )
}

export default AppPrams

```

### useState 
Dette react hook er en funktion der returnere en variable og en funktion til at ændre variablen. Syntaksen for useState er at deklarere en const med et array med navnet på din variable efterfulgt af navnet for din funktion til at ændre variablen, typisk navngiver man funktionen med “set” efterfulgt af det samme navn som variablen har. Arrayet er = useState funktionen hvor du sætte dine standardværdier med som parameter.
```
const [state, setState] = useState(initialState);
```
### useEffect 
Dette react hook er en funktion med 2 parameter. Det første parameter er en callback function og det andet er et array med inputs der kalder din callback function hvis der er ændringer. Hvis du ikke tilføjer nogle indput køre scriptet kun en gang. 

useEffect bruges som et script der tilhøre et komponent. dette kan for eksempel bruges til at fetch data hvor du derefter gøre brug af din “Set” function fra useState til at gemme data i din variable. i dit callback har du også mulighed for en “cleanup” function til for eksempel at fjerne en eventlistener.   
```
  useEffect(() => {
    // write your code here
    console.log('render!');
    return () => {
      // write your cleanup code here 
      console.log('unmounting...')
    }
  }, [// ]);

```

## Bilag:
<a href="https://www.google.com" target="_blank">Kanban board</a>

