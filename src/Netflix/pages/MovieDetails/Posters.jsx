import React, { useEffect, useState } from 'react'
import axios from '../../components/Constant/Axios'
import Carousel from "react-multi-carousel";
import { apiKey, imageUrl } from '../../components/Constant/constant'
import './poster.css'
import { Firebase } from '../../../const/firebase';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};


function Posters({ title, url }) {

    const [film, setFilm] = useState([])
    useEffect(() => {
        axios.get(url).then((response) => {
            console.log(response.data);
            setFilm(response.data.results);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    function logout(){
        Firebase.auth().signOut().then(()=>{
      console.log("sign out successfully")
        })
       }

    return (
        <div style={{marginTop:20}}>
<h1 style={{marginLeft:20}}>
    {title}
</h1>

            <Carousel swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {film.map((movie) => (
                    <div key={movie.id} style={{marginRight:10, marginLeft:20}}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
                        <p>{movie.title}</p>
                    </div>
                ))}
            </Carousel>

            {/* <div className='container join-now-content'>
                <h1>There’s even more to watch.</h1>
                <p>Netflix has an extensive library of feature films, documentaries, TV<br></br> shows, anime, award-winning Netflix originals and more. Watch as<br></br> much as you want, anytime you want.</p>
                <button class="btn btn-danger ms-3" type="submit" onClick={logout} >Join Now</button>

            </div> */}
        </div>
    )
}

export default Posters