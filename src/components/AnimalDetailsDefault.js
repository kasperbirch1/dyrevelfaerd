import React from "react"
import { Link } from 'gatsby'
import useApi from '../hooks/useApi'
import Swiper from 'react-id-swiper';
import '../theme/swiper.min.css';
import styled from 'styled-components';
const StyledAnimalDetailsDefaultSection = styled.section`
.sub-title {
    margin: 2rem 0 1rem;
}
.swiper-container {
    margin-top: 3rem;
    max-width: 100vw;
}
.swiper-slide {
    width: 20rem;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
}
`

const AnimalDetailsDefault = () => {
    const [response, loading] = useApi("https://dyrevelfaerd.herokuapp.com/api/v1/animals")
    // console.log("response", response);
    const params = {
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

        <StyledAnimalDetailsDefaultSection>
            <Swiper {...params} shouldSwiperUpdate>
                {loading
                    ? <p>LOADING</p>
                    : response && response.map(element => {
                        return (
                            <Link key={element.id} to={`/animal-details/${element.id}`}>
                                <img src={element.asset.url.replace("http://localhost:4000", "https://dyrevelfaerd.herokuapp.com").replace("jfif", "jpg")} alt={element.name} />
                            </Link>
                        )
                    })}
            </Swiper>
            <h2 className="sub-title">Se alle vores dyr</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ullam. Veritatis nemo, vitae ex ab quod molestias voluptas omnis aspernatur exercitationem dicta tenetur possimus vero debitis ipsa dolorum similique eum?</p>
        </StyledAnimalDetailsDefaultSection >

    )
}

export default AnimalDetailsDefault
