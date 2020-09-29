import React from 'react';
import { Link } from 'gatsby'

const Posts = ({ posts }) => {
    return (
        <ul>
            {posts.map(element => (
                <li key={element.id}>
                    {/* <pre>{JSON.stringify(element, null, 2)}</pre> */}
                    <Link to={`app/${element.id}`}>Link to: {element.id}</Link>
                    {/* <a href={`app/${element.id}`}>A to: {element.id}</a> */}
                </li>
            ))}
        </ul>
    );
};

export default Posts;