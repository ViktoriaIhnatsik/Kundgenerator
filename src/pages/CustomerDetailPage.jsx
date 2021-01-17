import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'
import { BodyDetail } from '../components/StyleComponents'
import User from '../components/User'



export default function CustomerDetailPage(props) {
//console.log(props)
const customerId = props.match.params.id
const [customerItem, setCustomerItem] = useState(null)  
const history = useHistory()


//få detail info för varje kund
function getCustomerItem() {
  const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/` //för att få info för en specifik customer
  const token = localStorage.getItem("WEBB20")
  fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
     .then(res => res.json())
    .then(data => setCustomerItem(data))
}


//ta bort customer
 function deleteCustomer() {   
   const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/` //för att få info för en customer
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(() => history.push('/home')) // gå tillbaka till customer list page
 }


useEffect (() => {  
   getCustomerItem()
 }, [])


  return (
    <div className="container">
      <User/>

     {customerItem // kolla om customerItem finns 
     ? (
        <BodyDetail>
          <h1 className="text-primary ">{customerItem.name}</h1>
           
           <table className="table table-striped table-bordered  ">
            <tbody>

            <tr>
               <td>Organisation Number</td>
               <td>{customerItem.organisationNr}</td>
            </tr>

            <tr>
              <td>VAT Number</td>
              <td>{customerItem.vatNr}</td>
            </tr>

            <tr>
              <td>Reference</td>
              <td>{customerItem.reference}</td>
            </tr>

            <tr>
              <td>Payment Term</td>
              <td>{customerItem.paymentTerm}</td>
            </tr>

             <tr>
              <td>Website</td>
              <td>
                <a href={customerItem.website} target="_blank"> 
                  {customerItem.website}
                </a>
              </td>
            </tr>

             <tr>
              <td>Email</td>
              <td>
                <a href={`mailto:${customerItem.email}`}> 
                  {customerItem.email}
                </a>
              </td>
            </tr>

            <tr>
              <td>Phone Number</td>
              <td>{customerItem.phoneNumber}</td>
            </tr>

             </tbody>      
          </table>

          <button className="btn btn-danger mt-2 mr-3 " onClick={deleteCustomer}>Delete Customer</button>

           <Link className="btn btn-success  mt-2"  to={`/customers/${customerId}/edit`}>Edit Customer</Link>

          </BodyDetail>
      
      )
      :
      (
         <span>Laddar data...</span> // om det finns inte 
      )
    }    

        <Link  className="btn btn-outline-secondary mt-4"  to="/home">
         Back to Customers
       </Link>  
    </div>
  )
}
