import { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import useSWR from 'swr'

import { IChair } from '../interface/data'
import Menu from '../components/Menu/Menu'
import api from '../services/api'
import Chair from '../components/Chair/Chair'

export default function choiceChair() {
  const [chair, setChair] = useState('')
  const [chairSelect, setChairSelect] = useState(false)
  const search = useLocation().search
  const paramsURL = {
    id: new URLSearchParams(search).get('id'),
    day: new URLSearchParams(search).get('day'),
    hour: new URLSearchParams(search).get('hour'),
  }
  const {
    data,
    error,
    isValidating: loading,
  } = useSWR<IChair[], Error>(
    [
      `/chairs?id=${paramsURL.id}&day=${paramsURL.day}&hour=${paramsURL.hour}`,
      'get',
    ],
    api,
    {
      revalidateOnFocus: true,
      refreshWhenHidden: true,
      refreshInterval: 120000, //2 minutes
      dedupingInterval: 0,
    },
  )

  return (
    <div className="flex flex-col h-screen">
      <Menu />
      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.map((chair, index) => (
          <Chair
            seat={chair.seat}
            chosen={chair.chosen}
            special={chair.special}
            key={index}
          />
        ))
      )}
    </div>
  )
}
