import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment'
import 'moment/locale/da';

import { breakpoints } from '../../theme/breakpoints'
import styled from 'styled-components'
const SyledArticle = styled.article`
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
           > :first-child {
               font-weight: bold;
               margin-bottom: 1rem;
               > :first-letter {
                   text-transform: uppercase;
               }
           }
           p {
            margin-bottom: 2rem; 
           }
           > :last-child {
                color: gray;
               > :first-letter {
                   text-transform: uppercase;
               }
           }
       }
`

export const CurrentAnimails = ({ currentPosts }) => {
    return (
        <>
            {currentPosts.map(element => {
                // console.log("element", element);
                return (
                    <Link key={element.id} to={`/vores-dyr/${element.id}`}>
                        <SyledArticle>
                            <img src={element.asset.url.replace("http://localhost:4000", "https://dyrevelfaerd.herokuapp.com").replace("jfif", "jpg")} alt={element.name} />
                            <div>
                                <h3>{element.name}</h3>
                                <p>{element.description}</p>
                                <p>{moment(element.createdAt.slice(0, 10), "YYYY-MM-DD").fromNow()}</p>
                            </div>
                        </SyledArticle>
                    </Link>
                );
            })}
        </>
    );
};
