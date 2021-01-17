import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Body } from '../components/StyleComponents'


export default function LoginPage() {

  const [ formData, setFormData] = useState({ 
    email: "Viktoryia.Ihnatsik@yh.nackademin.se", 
    password: "javascriptoramverk"
  })

  const history = useHistory() 
  

  //funktion för varje onChange
  function handleOnChange(e) {
    const inputName = e.target.name  // namn på input -> email och password
    const inputValue = e.target.value // value från input
    const newObj = {...formData, [inputName]: inputValue}  // new objekt som innehåler allt från formData och uppdaterar med det som ändras
    setFormData(newObj)// skicka new objekt 
  }


  // gör anrop till url, få token
  function handleOnSubmit(e) {
    e.preventDefault() //för att sida ska inte ladas om
    const url = "https://frebi.willandskill.eu/api-token-auth/"
    const payload = {
      email: formData.email,
      password: formData.password
    }
    fetch(url, {
      method: "POST", //skicka data när användaren loggar in
      body: JSON.stringify(payload), // skicka med payload till body; {payload} -> objekt, göra om till sträng JSON.stringify
       headers: { 
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data) 
      console.log(data.token)// fått en token
      localStorage.setItem("WEBB20", data.token) // spara token i localStorage
      history.push("/home") //när användaren loggar in, flytta honom till customer-list page
    })
  }

  return (
      <div className="container">
        <Body>
        <form  className="shadow rounded p-5 m-5 bg-light" onSubmit={handleOnSubmit}>
        
        <h1 className="h3 mb-5 text-primary text-center">Please log in</h1>

        <label className="form-label">Email adress</label>
        <input className="form-control mb-3" name="email" value={formData.email} onChange={handleOnChange} /> {/* onChange -> anropa funct*/}

        <label className="form-label">Password</label>
        <input className="form-control mb-5" name="password" value={formData.password} onChange={handleOnChange} /> {/*name för att ha koll vad är det*/ }
    
        <button type="submit" className="w-100 btn btn-lg btn-primary"> Log in </button>
      </form>
      </Body>

      </div>
  )
}
