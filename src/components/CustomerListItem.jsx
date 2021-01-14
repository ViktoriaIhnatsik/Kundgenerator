import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerListItem({customerData}) {
  return (
    <div>
      
      <Link className="btn btn-block p-0"
      to={`/customers/${customerData.id}`}>   {/*link till en customer detail page */}
         
          <table className="table table-striped table-hover">
            <tbody>
              <tr>
                <td> {customerData.name}</td> 
                <td>{customerData.email}</td> 
                <td>{customerData.phoneNumber}</td> 
              </tr>
            </tbody>
           </table>
        </Link>
      
    </div>
  )
}

