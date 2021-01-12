import React, { useState } from 'react'
import { useHistory }  from 'react-router-dom'

export default function CustomerCreatePage() {

  const [formData, setFormData] = useState({})  // spara form data i variabel
   const history = useHistory()  // användarens historik


   function handleOnChange(e) {
   const name = e.target.name  //kollar namn 
   const value = e.target.value  //kolar input vad man skrev
   const newObj = {...formData, [name]: value} //uppdatera varje gång med ny info
   setFormData(newObj)
 }

    // funktion som tar emot parameter och retunerar input med label
  function renderInput(name, label, type) {
    return (
    <div>
     <label>{label}</label>
      <input 
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
      method: "POST", // När man vill skapa något / Sckicka data
      body: JSON.stringify(formData),
       headers: {    //metaData; saker som är unik i den här anropet
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then( res => res.json())
    .then( data => {
      console.log(data)
       history.push("/home") //när new customer skappas, ska vi navigera honom till home page
    })
  }

  return (
    <div>
      <p>Customer Create Page</p>
      <form onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name")} {/*name, label, type */}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("reference", "Reference")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("website", "Website", "url")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        <button type="submit">Create Customer</button> {/*submit hela form */}
      </form>
    </div>
  )
}
