import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import User from '../components/User'

export default function CustomerUpdatePage(props) {
  const customerId = props.match.params.id 
  const [formData, setFormData] = useState({})
  const history = useHistory()

  function getCustomerItem() {
   const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/` //få info för en customer
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setFormData(data))
 }

  useEffect (() => {
   getCustomerItem()
 }, [])

 function handleOnChange(e) {
   const name = e.target.name  
   const value = e.target.value  
   const newObj = {...formData, [name]: value} 
   setFormData(newObj)
 }

   function renderInput(name, label, type) {
    return (
    <div className="col-md-6">
     <label className="form-label">{label}</label>
      <input className="form-control"
       type={type || "text"} 
       name={name} 
       value={formData[name] || ""}  // kollar om vi hinner göra fetch så sätter formData, om inte retunerar tom sträng
       onChange={handleOnChange}
    />
    </div>
    )
  }

   function handleOnSubmit(e) {
    e.preventDefault()
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/` 
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      method: "PUT", // när man vill förändra hela objektet
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => history.push(`/customers/${customerId}`))

  }
  return (
    <div className="container">
    <User />
   
     <form  className="row g-2" onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name")}
        {renderInput("email", "Customer Email")}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        {renderInput("reference", "Reference")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("website", "Website", "url")}
        <button className="btn btn-success mt-5 mx-auto" type="submit">Update Customer</button>
      </form>
    </div>
  )
}
