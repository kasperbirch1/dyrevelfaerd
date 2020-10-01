import React from 'react';
import styled from 'styled-components'
const StyledPaginationNav = styled.nav`
    ol {
        display: flex;
        justify-content: space-around;
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
        <StyledPaginationNav className="pagination">
            <ol >
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a href="/" onClick={e => handleClick(e, number)}  >Side: {number}  </a>
                    </li>
                ))}
            </ol>
        </StyledPaginationNav>
    );
};

export default Pagination;