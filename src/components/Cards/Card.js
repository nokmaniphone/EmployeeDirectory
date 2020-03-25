import React from 'react'
import './Card.css'

const Card = props => {
  return (

    <div className="card text-white bg-dark mb-3" >
      <h5 className="card-title"> {props.emp.first_name + ' ' + props.emp.last_name}</h5>
      <div className="card-body text-econdary">
        <p className="card-text">{props.emp.email}</p>
        <p className="card-text">{props.emp.gender}</p>
        <p className="card-text">Country: {props.emp.country}</p>
        <p className="card-text">Department: {props.emp.department}</p>
      </div>
    </div >
  )
}

export default Card