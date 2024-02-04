import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div>
      <h1 className='heading d-flex justify-content-center'>
      Unlimited movies, TV shows and more
      </h1>
      <p className='para'>Watch anywhere. Cancel anytime.</p>
      <p className='para1'>Ready to watch? Enter your email to create or restart your membership.</p>
  <div class="container">
    <form class="d-flex justify-content-center ">
      <input className='email me-2' type="search" placeholder="Email address" />
      <button style={{height:55, width:200,color:"white",background: "rgb(193, 17, 25)"}} class="btn"type="submit">Get started</button>
    </form>
  </div>
  <div className='line'></div>
  
  <div className='container first-body'>
    <div className="row">
        <div className="col-md-6 col-12" >
        <h1>Enjoy on your TV</h1>
        <p className='para2'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="col-md-6 col-12" style={{marginTop:150}}>
        <video autoPlay loop muted>
          <source src='video-tv.m4v'></source>
        </video>
        </div>
  </div>
  </div>
  <div className='line2'></div>
<div className="container second-body">
    <div className="row">
      <div className="col" style={{marginTop:20}}>
      <img className='mobile' src="mobile-0819.jpg" alt="" />
      </div>
      <div className="col" style={{marginTop:20}}>
      <h1>Download your shows to watch offline</h1>
      <p>Save your favourites easily and always have something to watch.</p>
      </div>
    </div>
  </div>
  <div className='line2'></div>
  <div className='container first-body'>
    <div className="row">
        <div className="col-6"  >
        <h1 style={{marginTop:40}}>Watch everywhere</h1>
        <p className='para2'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className="col-6" >
        <img src="netflix-3.webp" alt="" style={{width:600}}/>
        </div>
  </div>
  </div>
  <div className='line2'></div>
  <div className="container second-body">
    <div className="row">
      <div className="col" style={{marginTop:60}}>
      <img className='mobile' src="child.png" alt="" />
      </div>
      <div className="col">
      <h1>Create profiles for kids</h1>
      <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
      </div>
    </div>
  </div>
  <div className='line2'></div>
<div>
  <h3>Frequently Asked Questions</h3>
  <div className='container '>
  <button className='butn'>What is Netflix?</button>
  <button className='butn'>How much does Netflix cost?</button>
  <button className='butn'>Where can I watch?</button>
  <button className='butn'>How do I cancel?</button>
  <button className='butn'>What can I watch on Netflix?</button>
  <button className='butn'>Is Netflix good for Kids?</button>
  </div>
 <div style={{marginTop:40}}>
 <p className='para1'>Ready to watch? Enter your email to create or restart your membership.</p>
  <div class="container">
    <form class="d-flex justify-content-center ">
      <input className='email me-2' type="search" placeholder="Email address" />
      <button style={{height:55, width:200,color:"white",background: "rgb(193, 17, 25)"}} class="btn btn-danger" type="submit">Get started</button>
    </form>
  </div>
 </div>

</div>
<div className='line2'></div>

</div>

  )
}

export default Banner
