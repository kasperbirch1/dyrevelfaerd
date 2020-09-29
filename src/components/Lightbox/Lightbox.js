import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css"

const StyledLightbox = styled(Modal)`
    height: 100%;
    width: 100%;
`
const Carousel = styled(Flickity)`
    height: 100%;

    .flickity-page-dots{
        bottom: 50px;
    }

    .dot{
        background: #f00;
        border-radius: 0;
        width: 50px;
        height: 50px;
    }

    .flickity-viewport {
        height: inherit !important;
    }
`;

const Slide = styled.article`
    width: 100%;
    height: 100%;
    display:flex;
    justify-self:center;
    align-items:Center;
    div{
        width: 80%;
        height: 50%;
        margin: 0 auto;

        img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
    }
`;


const Lightbox = ({ fetchData, setLightbox, lightbox }) => {
    const [flickityRef, setFlickityRef] = useState(null)
    const flickityOptions = {
        initialIndex: lightbox.index,
        wrapAround: true
    }

    console.log("flickityRef", flickityRef);
    return (
        <StyledLightbox isOpen={lightbox.isOpen} onRequestClose={() => setLightbox({ ...lightbox, isOpen: false })}>
            <Carousel options={flickityOptions} flickityRef={(e) => setFlickityRef(e)} >
                {fetchData && fetchData.map((element, i) => {
                    console.log(element)
                    return <Slide key={i}>
                        <div>
                            <img src={element.url} alt={element.title} />
                            <h2>{element.title}</h2>
                        </div>
                    </Slide>
                })}
            </Carousel>
        </StyledLightbox>
    )
}

export default Lightbox
