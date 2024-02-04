import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light"/> */}
  <div class="container">
    <div className="row">
      <div className="col">
      <img className='netflix-logo' src="netflix logo.png" alt="" />

      </div>
      <div className="col">
      <form class="d-flex justify-content-end ms-2" style={{marginTop:25}} >
          <select style={{backgroundColor:"transparent", color:"white"}}>
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        <button class="btn ms-2" type="submit" style={{background:" rgb(193, 17, 25)",color:"white"}}>Sign In</button>
      </form>
      </div>
     
    </div>
    
  </div>
  </div>

  )
}

export default Navbar

