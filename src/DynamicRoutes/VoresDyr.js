import React from 'react'
import AnimalSlider from "../components/AnimalSlider"
import styled from 'styled-components'
const StyledVoresDyrSection = styled.section`
   p {
       margin: 2rem 0;
   }
`

const VoresDyr = () => {
    return (
        <StyledVoresDyrSection>
            <h3 className="sub-title">Se alle vores dyr</h3>
            <AnimalSlider />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ullam. Veritatis nemo, vitae ex ab quod molestias voluptas omnis aspernatur exercitationem dicta tenetur possimus vero debitis ipsa dolorum similique eum?</p>
        </StyledVoresDyrSection>
    )
}

export default VoresDyr