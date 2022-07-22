import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useSWR from 'swr'

import Menu from '../components/Menu/Menu'
import api from '../services/api'

export default function film() {
  const search = useLocation().search
  const id = new URLSearchParams(search).get('id')

  const {
    data,
    error,
    isValidating: loading,
  } = useSWR([`/films?id=${id}`, 'get'], api, {
    fallbackData: [],
    revalidateOnFocus: false,
    refreshWhenHidden: false,
    refreshInterval: 300000, //5 minutes
    dedupingInterval: 0,
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="flex flex-col h-screen">
      <Menu />
      {loading ? <p>Loading...</p> : <p>film</p>}
    </div>
  )
}
