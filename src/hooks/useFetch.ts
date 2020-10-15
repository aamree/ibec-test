import { useState, useEffect, useCallback } from "react"
import axios from 'axios';
import { IUser } from "./interfaces";

export interface IFetchData {
  isLoading: boolean,
  response: any | null,
  error: JSON | null
} 

export default (url: string): [IFetchData, ()=>void] => {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<IUser[]>([])
  const [error, setError] = useState(null)

  const doFetch = useCallback(() => {
    setIsLoading(true)
  }, [])

  useEffect(()=>{
    if (!isLoading) {
      return
    }
    axios.get<IUser[]>(url)
      .then((res) => {
        setIsLoading(false)
        setResponse(res.data)
      })
      .catch(err => {
        console.log("error", err);
        setIsLoading(false)
        setError(err.response.data)
      })
  }, [isLoading, url])

  return [{isLoading, response, error}, doFetch] 
}