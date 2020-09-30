import { useState, useEffect } from 'react';
import axios from 'axios'

export default function useApi(url) {
    const [response, setresponse] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true)
                const response = await axios.get(url)
                setresponse(response);
                setLoading(false)
                // console.log("useApi-response", response)
            } catch (error) {
                console.error(error)
            }

        }
        fetchApi()
    }, [url])
    return [response, loading]
}