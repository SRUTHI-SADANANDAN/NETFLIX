import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='container'style={{marginTop:40, color: "rgba(255,255,255,0.7)", }}>
      Questions? Call 
      <a  href='tel:000-800-100-8343'>   000-800-100-8343</a>
     <div>
        <div className="row mt-5">
            <div className="col-3">
                <ul>
                    <li>
                       <a href='FAQ'>FAQ</a> 
                    </li>
                    <li>
                      <a href='Investor relations'>Investor relations</a>  
                    </li>
                    <li>
                       <a href='Privacy'>Privacy</a> 
                    </li>
                    <li>
                       <a href='Speed Test'>Speed Test</a> 
                    </li>
                </ul>
                <form class="mt-2 " style={{marginLeft:30}} >
          <select style={{backgroundColor:"transparent", color:"white"}}>
            <option>English</option>
            <option>Hindi</option>
          </select>
          </form>
          <div  class="mt-3 " style={{marginLeft:30, color: "rgba(255,255,255,0.7)"}} >
            Netflix India
          </div>
            </div>
            <div className="col-3">
            <li>
                       <a href='Help Centre'>Help Centre</a> 
                    </li>
                    <li>
                      <a href='Investor Jobs'> Jobs</a>  
                    </li>
                    <li>
                       <a href='Cookie Preferences'>Cookie Preferences</a> 
                    </li>
                    <li>
                       <a href='Legal Notices'>Legal Notices </a> 
                    </li>
            </div>
            <div className="col-3">
            <li>
                       <a href='Account'>Account</a> 
                    </li>
                    <li>
                      <a href='Ways to Watch '> Ways to Watch</a>  
                    </li>
                    <li>
                       <a href='Corporate Information'>Corporate Information</a> 
                    </li>
                    <li>
                       <a href=' Only on Netflix'> Only on Netflix</a> 
                    </li>
            </div>
            <div className="col-3">
            <li>
                       <a href='Media Centre'>Media Centre</a> 
                    </li>
                    <li>
                      <a href='Terms of Use'> Terms of Use</a>  
                    </li>
                    <li>
                       <a href='Contact Us'>Contact Us</a> 
                    </li>
                   
            </div>
        </div>
     </div>
    </div>
  )
}

export default Footer
