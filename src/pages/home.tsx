import SlideFilms from '../components/SlideFilms/SlideFilms'
import Menu from '../components/Menu/Menu'
import useSWR from 'swr'

import api from '../services/api'

export default function index() {
  const {
    data,
    error,
    isValidating: loading,
  } = useSWR(['/films', 'get'], api, {
    fallbackData: [],
    revalidateOnFocus: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
    dedupingInterval: 0,
  })

  return (
    <div className="flex flex-col h-screen">
      <Menu />
      {loading ? <p>Loading...</p> : <SlideFilms data={data} />}
    </div>
  )
}
