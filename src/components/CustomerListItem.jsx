import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerListItem({customerData}) {
  return (
      <tr>
         {/*link till en customer detail page */} 

        <td>
          {customerData.name} 
        </td> 

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

