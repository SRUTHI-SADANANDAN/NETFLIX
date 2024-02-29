import { Navigate, useNavigate } from 'react-router-dom';
import './Banner.css'

import React, { useState } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { Firebase } from '../../../const/firebase'

function Banner() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    

    formState: { errors },
  } = useForm({mode: 'all'})
  const onsubmit = (data) => {
    Firebase.auth().signInWithEmailAndPassword(data.email,data.password)
    .then((data)=>{
       console.log("login successful",data.id)
       document.getElementById("successmessage").innerText="Signedup successfully"

    })
    .catch((error)=>{
      console.error("enter valid email id and password")
      document.getElementById("errormessage").innerText="enter valid email id and password"
    })
  }

  return (
    <>
      <div className='container bgimg'>
        <div className="row mt-5">
          <div className="col">
            <div className='image-banner'>
              <div className='heading'>
                <h1>Unlimited movies, TV shows and more</h1>
              </div>
              <div className='mt-3 mb-4'>
                <p>Watch anywhere. Cancel anytime.</p>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
              </div>
              <form onSubmit={handleSubmit(onsubmit)}>
              <div className='inp'>
                <input {...register("email",{required:true,pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} className='input-filed' type='text' placeholder='Email Address' ></input>
                {errors.email && <span style={{ color: "#e87c03" }}>This field is required</span>}
                <button className='butn1 btn-lg mt-3 ms-3' >Get started</button>
                <div className='inp2'>
                <input {...register("password",{required:true,pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/})} style={{width:"45%"}} className='input-filed' type='password' placeholder='Password' ></input>
                {errors.password && <span style={{color:"#e87c03"}}>Password must contain Uppercase Lowercase numbers and special characters</span>}
                <p id="errormessage" style={{color:"#e87c03"}}></p>
                <p id="successmessage" style={{color:"green"}}></p>

                </div>

              </div>
              </form>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "3em", paddingBottom: "3em" }}></div>



      </div>
      <div className='line-area'>
        <div className='line'></div>
      </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 content">
                <h1>Enjoy on your TV</h1>
                <p style={{textAlign:'left'}}>Watch on smart TVs, PlayStation, Xbox,<br></br> Chromecast, Apple TV, Blu-ray players and more.</p>
              </div>
              <div className="col-md-6 col-12 ">
              <video autoPlay loop muted>
                <source src='video-tv.m4v'></source>
              </video>
              </div>
            </div>
          </div>
          <div className='line-area'>
        <div className='line'></div>
      </div>
      <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 content">
                <img className='mobile' src="mobile-0819.jpg" alt="mobile" />
              </div>
              <div className="col-md-6 col-12 content">
              <h1>Download your<br></br> shows to watch<br></br> offline</h1>
                <p style={{textAlign:'left'}}>Save your favourites easily and always have something to watch.</p>
              </div>
            </div>
          </div>
          <div className='line-area'>
        <div className='line'></div>
      </div>
      <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 content">
                <h1>Watch everywhere</h1>
                <p style={{textAlign:'left'}}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
              </div>
              <div className="col-md-6 col-12">
                <img className='img2' src="netflix-3.webp" alt="" style={{width:600}} />
              </div>
            </div>
          </div>
          <div className='line-area'>
        <div className='line'></div>
      </div>
      <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 content">
                <img className='mobile' src="child.png" alt="mobile" />
              </div>
              <div className="col-md-6 col-12 content">
              <h1>Create profiles for kids</h1>
                <p style={{textAlign:'left'}}>Send children on adventures with their <br></br> favourite characters in a space made just for<br></br> them—free with your membership.</p>
              </div>
            </div>
          </div>
          <div className='line-area'>
        <div className='line'></div>
      </div>
      <div className="container">
        <div className='heading2'>
          <h1>Frequently Asked Questions</h1>
          <button className='butn'>What is Netflix?</button>
          <button className='butn'>How much does Netflix cost?</button>
          <button className='butn'>Where can I watch?</button>
          <button className='butn'>How do I cancel?</button>
          <button className='butn'>What can I watch on Netflix?</button>
          <button className='butn'>Is Netflix good for Kids?</button>
        </div>
        <div>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='inp'>
                <input className='input-filed' type='text' placeholder='Email Address'></input>
                <button className='butn1 btn-lg mt-3 ms-3' >Get started</button>
              </div>

        </div>
      </div>
      <div className='line-area'>
        <div className='line'></div>
      </div>
    </>
  )
}

export default Banner