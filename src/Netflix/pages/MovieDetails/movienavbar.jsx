import React, { useEffect, useState } from 'react'
import './Movienavbar.css'
import { Firebase } from '../../../const/firebase'
import Banner from '../../components/Banner/Banner'
import Signin from '../sign in/sign in'

function Movienavbar({user}) {
  
  console.log(user)
  
 function logout(){
  Firebase.auth().signOut().then(()=>{
console.log("sign out successfully")
  })
 }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"black"}}>
  <div class="container-header" >
    <a class="navbar-brand" href='/'>NETFLIX</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div >
     
      <form class="d-flex" role="search">
        <div className='content-header text-white'>{user.displayName}</div>
         <button class="btn btn-danger ms-3" type="submit" onClick={logout} >Join Now</button>
         
        <button class="btn text-white btn-dark ms-3" type="submit" onClick={logout} style={{borderColor:'white'}}>Log out</button>
      </form>
    </div>

 
  </div>
</nav>

    </div>
  )
}

export default Movienavbar