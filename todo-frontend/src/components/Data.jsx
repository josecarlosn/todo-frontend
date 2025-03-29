import React, { useEffect, useState } from 'react'
import api from '../services/api';

function Data() {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await api.get('/')
            setData(response.data)
        }
        fetchData();
    })
  return (
    <div>{data[0].title}</div>
  )
}

export default Data;