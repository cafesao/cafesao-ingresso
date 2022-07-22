import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useSWR from 'swr'

import { IDataFilmsChoice, IDataFilmsChoiceDaysHours } from '../interface/data'

import Menu from '../components/Menu/Menu'
import api from '../services/api'
import DaysAndHours from '../components/DaysAndHours/DaysAndHours'

export default function film() {
  const search = useLocation().search
  const id = new URLSearchParams(search).get('id')

  const {
    data,
    error,
    isValidating: loading,
  } = useSWR<IDataFilmsChoice, Error>([`/films?id=${id}`, 'get'], api, {
    revalidateOnFocus: false,
    refreshWhenHidden: false,
    refreshInterval: 300000, //5 minutes
    dedupingInterval: 0,
  })

  return (
    <div className="flex flex-col h-screen">
      <Menu />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{data?.name}</h1>
          <h2>Cinema Itajai</h2>
          <p>R. Samuel Heusi, 234</p>
          {data?.daysHours?.map((daysAndHours) => (
            <DaysAndHours daysHours={daysAndHours} />
          ))}
        </div>
      )}
    </div>
  )
}
