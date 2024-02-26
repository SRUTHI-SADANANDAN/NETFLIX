import React, { useEffect, useState } from 'react'
import './moviebanner.css'
import 'react-multi-carousel/lib/styles.css';
import { apiKey, imageUrl } from '../../components/Constant/constant'
import axios from '../../components/Constant/Axios'
import { url } from '../../components/Constant/constantMovieUrl.js';
import "react-multi-carousel/lib/styles.css";
import Posters from './Posters';




function Moviebanner() {
  const [moviedata, setMovieData] = useState([])
  useEffect(() => {
    axios.get(`/discover/movie?api_key=${apiKey}`)

      .then((response) => {
        // console.log(response.data.results)
        setMovieData(response.data.results)
      })
  }, [])

  let x = url.map((response)=>{
    return(
     <Posters title={response.title} url = {response.url}/>
    )
 
  })



  if (!moviedata.length) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    )
  }


  const random = Math.floor(Math.random() * moviedata.length)

  return (
    <div style={{marginLeft:20, marginRight:20}}>

      <div className=' banner-container' style={{ backgroundImage: `url(${imageUrl + moviedata[random].backdrop_path})` }}>

        <div>

          <h1 className='moviename'>{moviedata[random].title}</h1>


          <p className='overview'> {moviedata[random].overview}</p>
          <button className='playbutton'>Play</button>

        </div>

        
      </div>
      {x}
      
    </div>


  )
}


export default Moviebanner