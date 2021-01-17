import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerListItem({customerData}) {
  return (
      <tr>
         

        <td>{customerData.name} </td> 

       <td>{customerData.email}</td> 

      <td>{customerData.phoneNumber}</td>

      <td>
      <Link className="btn btn-outline-primary" to={`/customers/${customerData.id}`}>
        Detail Info
      </Link>
      </td>

      </tr>
  )
}

