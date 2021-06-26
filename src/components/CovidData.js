import React from 'react'
import { useState, useEffect } from 'react'
import Cards from './Cards'

const CovidData = () => {
  const [data, setData] = useState([])

  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json')
      const actualData = await res.json()
      //console.log(actualData)
      const stateObjects = actualData.statewise[0]
      //stateObjects.map((state)=>console.log(state.state))
      setData(stateObjects)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCovidData()
  }, [])

  return (
    <div>
      {data && (
        <Cards
          state={data.state}
          active={data.active}
          deaths={data.deaths}
          confirmed={data.confirmed}
          recovered={data.recovered}
        />
      )}
    </div>
  )
}
export default CovidData
