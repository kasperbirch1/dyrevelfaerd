import React from "react"
import { Link } from 'gatsby'
import useApi from '../../hooks/useApi'
import Swiper from 'react-id-swiper';
import Loading from '../Loading'
import './swiper.min.css';
import { breakpoints } from '../../theme/breakpoints'
import styled from 'styled-components';
const StyledAnimalSliderSection = styled.section`
.sub-title {
    margin: 2rem 0 1rem;
}
.swiper-container {
    margin: 2rem 0;
    max-width: 100vw;
}
.swiper-slide {
    width: 10rem;
    @media ${breakpoints.md} {
        width: 20rem;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
}
`

const AnimalSlider = ({ id = 2 }) => {
    const [response, loading] = useApi("https://dyrevelfaerd.herokuapp.com/api/v1/animals")
    // console.log("response", response);
    const params = {
        initialSlide: (id - 1),
        rebuildOnUpdate: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            // el: '.swiper-pagination'
        }
    }
    return (

        <StyledAnimalSliderSection>
            <Swiper {...params} shouldSwiperUpdate>
                {loading
                    ? <Loading />
                    : response && response.map(element => {
                        return (
                            <Link key={element.id} to={`/vores-dyr/${element.id}`}>
                                <img src={element.asset.url.replace("http://localhost:4000", "https://dyrevelfaerd.herokuapp.com").replace("jfif", "jpg")} alt={element.name} />
                            </Link>
                        )
                    })}
            </Swiper>
        </StyledAnimalSliderSection >

    )
}

export default AnimalSlider
