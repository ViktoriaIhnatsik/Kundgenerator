import React, {useState} from 'react'

export default function CustomerDetailPage(props) {
//console.log(props)
const customerId = props.match.params.id
const [customerItem, setCustomerItem] = useState(null)  // vi fått objekt från api i console; null för att kolla om det finns customerItem i return 

  return (
    <div>
      Detail Page
    </div>
  )
}
