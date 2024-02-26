import React, { useState } from 'react'
import "./sign in.css"
import { useForm, useFormContext } from 'react-hook-form'
import { Firebase } from '../../../const/firebase'
import { useNavigate } from 'react-router-dom'

function Signin() {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'all' })
    const onSubmit = (data) => {
        console.log(data)

        // Firebase.firestore().collection("users").add({
        //                    username: data.username,
        //                  email: data.email,
        //             password: data.password
        //              })

        //          .then ((x)=>{
        //                  console.log("saved",x.id)

        //     navigate("/")
        //              })


        Firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((user) => {
           return user.user.updateProfile({
            displayName: data.username
           })
            navigate("/")
        })

    }



    return (

        <div className='bgimg'>
            <div class="showcase-content">
                <div class="formm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Sign In</h1>
                        <div class="info">
                            <input {...register("username", {
                                required: true, minLength: 4, maxLength: 20, validate: (value) => { /^[A-Z]{2}\d{4}$/.test(value) },
                            })} class="username" type="text" placeholder='User name' /><br></br>
                            {errors.username && <span style={{ color: "#e87c03" }}>This field is required</span>}
                            <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} class="email" type="email" placeholder="Email" />
                            {errors.email && <span style={{ color: "#e87c03" }}>This field is required</span>}
                            <br></br>
                            <input {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/ })} class="password" type="password" placeholder="Password" />
                            {errors.password && <span style={{ color: "#e87c03" }}>Password must contain Uppercase Lowercase numbers and special characters</span>}
                        </div>
                        <div class="btn">
                            <button class="btn-primary" >Sign In</button>
                        </div>
                        <div class="help">
                            <div>
                                <input value="true" type="checkbox" /><label>Remember me</label>
                            </div>


                        </div>

                    </form>

                </div>


                <div class="signup">
                    <p>New to Netflix ?</p>
                    <a href="https://www.netflix.com/dz-en/">Sign up now</a>
                </div>
                <div class="more">
                    <p>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
                    </p>
                </div>


            </div>
        </div>
    )
}


export default Signin