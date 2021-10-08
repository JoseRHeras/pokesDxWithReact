import axios from "axios";
import { useEffect, useState } from "react";
import {  Pokemon } from "../App";

interface AResponse {
    count: number;
    next: string | null;
    previous: string | null
    results:{}[]
  }

const usePaginationFromUrl = (url: string) => {
    const [data, setData] = useState<Pokemon['pokemons']>([])
    const [currentPageUrl, setCurrentPageUrl] = useState<string>(url)
    const [previousPageUrl, setPreviousPageUrl] = useState<string | null>()
    const [nextPageUrl, setNextPageUrl] = useState<string | null>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        let cancel:any

        setLoading(true)
        axios
        .get<AResponse>(
            currentPageUrl, 
            {
                cancelToken: new axios.CancelToken(c => cancel = c)
            }
        )
        .then((response) => {
            setLoading(false)
            response.data['results'].map((pokemon:any) => {
                setData((oldData) => (
                    [
                        ...oldData,
                        {name: pokemon['name']}
                    ]
                ))
            })

            setNextPageUrl(response.data['next'])
            setPreviousPageUrl(response.data['previous'])
        })
        return () => cancel()
    }, [currentPageUrl])

    
    const handleNextRequest = () => {
        if (!nextPageUrl) return

        setData([])
        setCurrentPageUrl(nextPageUrl)
    }

    const handlePreviousRequest = () => {
        if (!previousPageUrl) return

        setData([])
        setCurrentPageUrl(previousPageUrl)
    }

    return {data, handleNextRequest, handlePreviousRequest, loading}
}

export default usePaginationFromUrl