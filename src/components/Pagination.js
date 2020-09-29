import React from 'react';
import styled from 'styled-components'
const StyledPaginationNav = styled.nav`
    ul {
        display: flex;
        li {
            padding: .5rem;
        }
    }
`

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    function handleClick(event, number) {
        event.preventDefault();
        paginate(number)
    }

    return (
        <StyledPaginationNav>
            <ul >
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a href="/" onClick={e => handleClick(e, number)}  >Side: {number}  </a>
                    </li>
                ))}
            </ul>
        </StyledPaginationNav>
    );
};

export default Pagination;