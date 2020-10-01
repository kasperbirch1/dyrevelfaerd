import { useState, useEffect } from 'react';
import axios from 'axios'

export default function useApi(url, number) {
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true)
                const response = await axios.get(url)
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