import './App.css';
import Banner from './Netflix/components/Banner/Banner';
import Footer from './Netflix/components/Footer/Footer';
import Navbar from './Netflix/components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Netflix/pages/sign in/sign in';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { Firebase } from './const/firebase';
import Movienavbar from './Netflix/pages/MovieDetails/movienavbar';
import Auth, { AuthContext } from './Netflix/components/Constant/Context';
import { useContext, useState } from 'react';
import './Home.css'
import Moviebanner from './Netflix/pages/MovieDetails/moviebanner';



function App() {
  const {user,setUser} = useContext(AuthContext)

 
  Firebase.auth().onAuthStateChanged((user)=>{
    if(user){
       setUser(user)
    //  console.log("user",user.email)
    }
  })

  return (
    <div >


<BrowserRouter>
{
  user? <Movienavbar user={user}/>: <Navbar/>
}


  <Routes>
    <Route path='/' element={user?<Moviebanner />:<Banner/>} />
    
    <Route path='/signup' element={<Signin />} />
  </Routes>
<Footer/>

</BrowserRouter>
</div >

  );
}


// function Home() {
//   return (
//     <div className='bgimg'  >
//       <Banner />

//     </div>
//   )
// }

export default App;
