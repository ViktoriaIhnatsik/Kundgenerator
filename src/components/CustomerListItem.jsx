import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerListItem({customerData}) {
  return (
    <div>
      <Link to={`/customers/${customerData.id}`}>   {/*link till en customer detail page */}
          {customerData.name}
        </Link>
    </div>
  )
}

