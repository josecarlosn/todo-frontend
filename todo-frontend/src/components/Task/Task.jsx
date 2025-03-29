import React from 'react'

function Task({id,title, description,status, date_of_creation}) {
  return (
    <>
        <div key={id}>{title} - {description} - {status} - {date_of_creation}</div>
        <button>Update</button><button>Delete</button>
    </>
  )
}

export default Task