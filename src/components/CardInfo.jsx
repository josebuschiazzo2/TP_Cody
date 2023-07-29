import React from 'react'

export default function CardInfo(props) {
  return (
    
            <div className="col column-info">
          <h1>Info</h1>
          <ul>
            <li>{props.location}</li>
            <li>{props.phoneNumber}</li>
            <li>{props.email}</li>
          </ul>
          <p>
            {props.textDescription}
          </p>
          <p>{props.nameCompany}</p>
        </div>


  
  )
}
