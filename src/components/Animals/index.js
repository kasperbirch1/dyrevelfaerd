import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Pagination from './Pagination'
import { breakpoints } from '../../theme/breakpoints'
import { CurrentAnimails } from './CurrentAnimails';
const StyledAnimalsSection = styled.section`
    padding: var(--section-padding);
    display: grid;
    grid-gap: 1rem;
    @media ${breakpoints.md} {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }
    
   .animail-article {
       border: var(--theme-border);
       @media ${breakpoints.md} {
        display: flex;
       }
        img {
            object-fit: cover;
            @media ${breakpoints.md} {
                max-width: 200px;
            }
        }
       div {
           padding: var(--small-padding);
       }
   }
   .pagination {
       grid-column: 1/-1;
   }
`

const Animals = () => {
    const [url] = useState(`https://dyrevelfaerd.herokuapp.com/api/v1/animals`)
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true)
                const response = await axios.get(url)
                setPosts(response.data);
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        fetchApi()
    }, [url])

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    return (
        <StyledAnimalsSection className="wrapper" id="#Animals-Section" >
            <div style={{ gridColumn: '1/-1' }}>
                <h2 className="sub-title" style={{ marginBottom: ".5rem" }}>Dyr hos os</h2>
                <p>{`${posts.length} dyr`}</p>
            </div>
            {loading
                ? <p>LOADING</p>
                : <>
                    <CurrentAnimails currentPosts={currentPosts} totalPosts={posts.length} />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />
                </>
            }
        </StyledAnimalsSection>
    )
}

export default Animals


