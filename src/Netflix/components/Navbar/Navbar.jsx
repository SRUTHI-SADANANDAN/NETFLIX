import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
  //   <div>
  //    
  // <div class="container">
  //   <div className="row">
  //     <div className="col">
  //     <img className='netflix-logo' src="netflix logo.png" alt="" width={150}/>

  //     </div>
  //     <div className="col">
  //     <form  class=" ms-2 butns"  >
  //         <select className='lang-butn'>
  //           <option>English</option>
  //           <option>हिन्दी</option>
  //         </select>
  //       <button class="btn ms-2" type="submit" style={{background:" rgb(193, 17, 25)",color:"white"}}>Sign In</button>
  //     </form>
  //     </div>
     
  //   </div>
    
  // </div>
  // </div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="/">NETFLIX</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div >
     
      <form class="d-flex" role="search">
      <select className='lang-butn'>
           <option>English</option>
          <option>हिन्दी</option>
         </select>
        <button class="btn btn-danger ms-3" type="submit" onClick={()=>navigate("/signup")}>Sign in</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar

