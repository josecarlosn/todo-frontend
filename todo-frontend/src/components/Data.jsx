import React, { useEffect, useState } from 'react'
import Task from './Task/Task';
import api from '../services/api';

function Data() {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
          try {
            const response = await api.get('/')
            setData(response.data)
          } catch (error) {
          }
            
        }
        fetchData();

    }, [])
  return (
    <div>{data.map((item)=>{
      return <Task key={item.id} id={item.id} title={item.title} description={item.description} status={item.status} date_of_creation={item.date_of_creation}/>
    })}</div>
  )
}

export default Data;