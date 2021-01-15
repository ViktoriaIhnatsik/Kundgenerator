import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CustomerListItem from '../components/CustomerListItem'
import User from '../components/User'

export default function CustomerListPage() {

  const [customerList, setCustomerList] = useState([]) // variabel för funkt getCustomerList; [] -> resultatet kommer från array, darför skriver vi []

  useEffect ( () => {
    getCustomerList()  // när sida randeras få customer list
  }, [])


  // hämta list med alla kundar
  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("WEBB20") // använda token som fi vick från respons
     fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setCustomerList(data.results))
  }

  
  return (
    <div className="container">

      <User /> {/* hämta info om inloggade användare */}
     

      <table className="table table-striped table-hover ">

        <thead>
         <tr>
          <th >Name</th>
          <th >Email</th>
          <th >Phone Number</th>
          <th>Detail Info</th>
         </tr>
        </thead>

        <tbody>
               
      {customerList.map(item => {   // mapa över 
        return <CustomerListItem key={item.id} customerData={item} />
      })}
         
      </tbody>
      </table>
      
      
      
      
       <Link  className="btn btn-success btn-block mt-3"  to="/create-customer">
        Create Customer
       </Link>  
      
       
    </div>
  )
}
