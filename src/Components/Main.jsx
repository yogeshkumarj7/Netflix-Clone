import React, { useEffect, useState } from 'react'
import Requests from '../Request';
import axios from "axios";
const Main = () => {

    const[movies,setMovies]=useState([]);

    const movie=movies[Math.floor(Math.random() * movies.length)]

    // Making the api call

    async function fetchData(){
        try{
            const result=await axios.get(Requests.requestPopular);
            const data=result.data.results;
            console.log(data);
            setMovies(data);
        }catch(error){
            console.log("Error occoured while fetching data")
        }
    }
    
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
             <img className='w-full h-full object-cover' src={ `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
             <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <div>
                    <button className='border bg-gray-300 text-black py-2 px-5'>Play</button>
                    <button className='border border-gray-300 text-white py-2 px-5 ml-4'>Watch Later</button>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Main;