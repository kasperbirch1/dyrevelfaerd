import React from 'react';
import { Link } from 'gatsby';

export const CurrentAnimails = ({ currentPosts }) => {
    return (
        <>
            {currentPosts.map((element, index) => {
                return (
                    <Link key={element.id} to={`/vores-dyr/${element.id}`}>
                        <article className="animail-article">
                            <img src={element.asset.url.replace("http://localhost:4000", "https://dyrevelfaerd.herokuapp.com").replace("jfif", "jpg")} alt={element.name} />
                            <div>
                                <h3>{element.name}</h3>
                                <p>{element.description}</p>
                            </div>
                        </article>
                    </Link>
                );
            })}
        </>
    );
};
