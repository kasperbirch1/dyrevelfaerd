import { useState, useEffect } from 'react';
import axios from 'axios'

export default function useApi(url) {
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    var instance = axios.create({
        baseURL: 'https://dyrevelfaerd.herokuapp.com/api/v1'
    });

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true)
                const response = await instance.get(url)
                setResponse(response.data);
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        fetchApi()
    }, [url])

    return [response, loading, error]
}