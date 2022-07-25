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
        <div className="justify-center text-center items-center">
          <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={data?.image}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{data?.name}</h1>
                <p className="py-6">{data?.description}</p>
              </div>
            </div>
          </div>
          {data?.daysHours?.map((daysAndHours, index) => (
            <DaysAndHours key={index} daysHours={daysAndHours} />
          ))}
        </div>
      )}
    </div>
  )
}
