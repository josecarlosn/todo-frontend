import React from 'react'
import api from '../../services/api'

function Button({type, label, value}) {
    function handleTypeButton(type){
        if(type === 'addButton'){
            console.log('Função executada')
            addTask(value, value)
        }else{
            console.log('tipo não reconhecido')
        }
    }
    async function addTask(title, description){
        const newTask = {title, description}
        try {
          const response = await api.post('http://localhost:3000/add-task', newTask)
        } catch (error) {
            console.log('Erro ao adicionar tarefa')
        }
        
    }
  return (
    <button onClick={()=>{handleTypeButton(type)}}>{label}</button>
  )
}

export default Button