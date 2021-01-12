import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

export default function LoginPage() {

  const [ formData, setFormData] = useState({ // state variabel för båda email och password
    email: "Viktoryia.Ihnatsik@yh.nackademin.se", // objekt som ska inehålla email och password
    password: "javascriptoramverk"
  })

  const history = useHistory() // användarens historik console.log(history)
  

  //en funktion för varje onChange
  function handleOnChange(e) {
    const inputName = e.target.name  // namn på input -> email och password
    const inputValue = e.target.value // value från input
    const newObj = {...formData, [inputName]: inputValue}  // new objekt som innehåler allt från formData och uppdaterar med det som ändras
    setFormData(newObj)// skicka new objekt istället
  }


  // gör anrop till url, fått token
  function handleOnSubmit(e) {
    e.preventDefault() ////för att sida ska inte ladas om
    const url = "https://frebi.willandskill.eu/api-token-auth/"
    const payload = {
      email: formData.email,
      password: formData.password
    }
    // fetch till url, som med metoder POST skickar in våran email och password till backend 
    fetch(url, {
      method: "POST", //skicka data när vi loggar in
      body: JSON.stringify(payload), // skicka med payload till body; {payload} -> objekt, backend vill att vi göra om till sträng JSON.stringify
       headers: { // info för backend
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data) // fått en token
      console.log(data.token)
      localStorage.setItem("WEBB20", data.token) // sparar token i localStorage
      history.push("/home") //när customer logga in, ska vi flytta honom till customer-list page
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3 mt-5 ">
        <h1 className="h3 mb-3 fw-normal text-center">Please log in</h1>

        <label className="form-label">Email adress</label>
        <input className="form-control" name="email" value={formData.email} onChange={handleOnChange} /> {/* onChange -> anropa funct*/}
        </div>

        <div className="mb-3">
        <label className="form-label">Password</label>
        <input className="form-control" name="password" value={formData.password} onChange={handleOnChange} /> {/*ger name för att ha koll vad är det*/ }
        </div>

        <button type="submit" className="w-100 btn btn-lg btn-primary"> Login </button>
      </form>
    </div>
  )
}
