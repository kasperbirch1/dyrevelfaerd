import React, { useState, useEffect } from "react"
import axios from 'axios';
import Posts from '../Posts'
import Pagination from '../Pagination'

const AppComponent = () => {
    const [url] = useState(`https://jsonplaceholder.typicode.com/posts`)
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const response = await axios.get(url);
            setPosts(response.data);
            setLoading(false);
        };

        fetchPosts();
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
        <>
            AppComponent
            {loading ?
                <h2>Loading...</h2>
                :
                <>
                    <Posts posts={currentPosts} />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />
                </>
            }
        </>
    )
}

export default AppComponent
