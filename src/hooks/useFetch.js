import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: [],
        isLoading: true,
    })

    const getProducts = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        const resp = await axios.get(url)
        const data = await resp.data

        setState({
            data,
            isLoading: false,
        })
    }

    useEffect(() => {
        getProducts();
    }, [url])
        
  return {
    data: state.data,
    isLoading: state.isLoading
  };
}
