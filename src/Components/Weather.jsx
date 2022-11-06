import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

const url = `https://api.openweathermap.org/data/2.5/weather?q=Abuja&units=imperial&appid=59f8b3c520ef6e0c41f2ca99bd65b7d6`

const Weather = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    },[])
    

    if(!data) return null;

    return (
    <div>
      <p>{data.main.temp.toFixed(0)}</p>
    </div>
  )
}

export default Weather
