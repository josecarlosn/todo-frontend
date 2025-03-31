import React from 'react'

function Task({id,title, description,status, creation_date}) {
  return (
    <>
        <div id={id}>{title} - {description} - {status} - {creation_date}</div>
        <button>Update</button><button>Delete</button>
    </>
  )
}

export default Task