import React, {useState, useEffect} from 'react'




export default function User() {

  const [user, setUser] = useState({})

  // hämta info om inloggade användare
  useEffect(() => {
    const url = "https://frebi.willandskill.eu/api/v1/me/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {   
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      }
    })
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])

  return (
       <div className="mt-4 mb-3 d-flex justify-content-end">
       <p className=" border rounded border-primary text-primary p-2 "> User: {user.firstName} {user.lastName}</p> {/* hämta info om inloggade användare */}
      
      </div>
  )
}
