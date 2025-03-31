import React, { useEffect, useState } from 'react'
import api from '../services/api';
import Task from './Task/Task'

function Data() {
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
          try {
            const response = await api.get('/')
            setData(response.data)
          } catch (error) {
            console.log('Erro de requisição:', error)
          } 
        }
        fetchData();
    },[])
  return (
    <div >{data.map((item)=>{
      return <Task key={item.id} id={item.id} title={item.title} description={item.description} status={item.status} creation_date={item.creation_date}/>
    })}</div>)
}
export default Data;