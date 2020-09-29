import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Lightbox from '../Lightbox/Lightbox'

const StyledGalleryContainerSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(var(--wrapper-max-size) / 5), 1fr));
`
const Loading = styled.span`
    display: block;
    text-align: center;
    font-size: 3rem;
`

const GalleryContainer = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 })
    const [fetchData, setFetchData] = useState(null);

    const handleLightBox = (index) => {
        setLightbox({ ...lightbox, index, isOpen: true });
    }


    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
                const data = res.data.splice(0, 5);
                setFetchData(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    return (
        <>
            {!fetchData ?
                <Loading>Loading..</Loading>
                :
                <>
                    <StyledGalleryContainerSection>
                        {fetchData.map((element, index) => {
                            return (
                                <div key={element.id} onClick={() => handleLightBox(index)} onKeyDown={() => handleLightBox(index)} role="button" tabIndex={index}>
                                    <img src={element.url} alt={element.title} />
                                </div>
                            )

                        })}
                    </StyledGalleryContainerSection>
                    <Lightbox fetchData={fetchData} handleLightBox={handleLightBox} lightbox={lightbox} setLightbox={setLightbox} />
                </>
            }
        </>
    )
}

export default GalleryContainer
