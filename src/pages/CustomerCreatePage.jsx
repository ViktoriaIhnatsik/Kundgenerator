import React, { useState } from 'react'
import { useHistory }  from 'react-router-dom'
import User from '../components/User'

export default function CustomerCreatePage() {

  const [formData, setFormData] = useState({})  
   const history = useHistory()  


   function handleOnChange(e) {
   const name = e.target.name  
   const value = e.target.value  
   const newObj = {...formData, [name]: value} //uppdatera varje gång med ny info
   setFormData(newObj)
 }

   // funktion som tar emot parameter och retunerar input med label
  function renderInput(name, label, type) {
    return (
    <div className="col-md-6">
     <label className="form-label">{label}</label>
      <input className="form-control"
       type={type || "text"} // type om det finns eller || text om det finns inte type
       name={name} 
       onChange={handleOnChange} // updatera formData med vad som skrivas i input 
    />
    </div>
    )
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      method: "POST", // när man vill skapa något / sckicka data
      body: JSON.stringify(formData),
       headers: {    
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then( res => res.json())
    .then( data => {
       console.log(data)
       history.push("/home") //när new customer skappas,  navigera honom till home page
    })
  }


  return (
    <div className="container">
      <User />
      
      <form className="row g-2" onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name")} {/*name, label, type */}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("reference", "Reference")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("website", "Website", "url")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        <button  className="btn btn-success mt-5 mx-auto" type="submit">Create Customer</button> {/*submit hela form */}
      </form>
    </div>
  )
}
