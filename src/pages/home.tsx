import SlideFilms from '../components/SlideFilms/SlideFilms'
import Menu from '../components/Menu/Menu'
import useSWR from 'swr'

import api from '../services/api'
import { IDataFilms } from '../interface/data'
import { useEffect } from 'react'

export default function index() {
  const {
    data,
    error,
    isValidating: loading,
  } = useSWR<IDataFilms, Error>(['/films', 'get'], api, {
    revalidateOnFocus: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
    dedupingInterval: 0,
  })

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <Menu />
      {loading ? <p>Loading...</p> : <SlideFilms data={data} />}
    </div>
  )
}
