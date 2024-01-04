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

    const truncateString=(str,num)=>{
        if(str?.length>num){
            return str.slice(0,num) +"...";
        }else{
            return str;
        }

    }
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-tr from-black'></div>
             <img className='w-full h-full object-cover' src={ `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
             <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className='my-4'></div>
                <div> 
                    <button className='border bg-gray-300 text-black py-2 px-5'>Play</button>
                    <button className='border border-gray-300 text-white py-2 px-5 ml-4'>Watch Later</button>
                </div>
                <div>
      <div className='text-gray-400 text-sm'>Released: {movie?.release_date}</div>
      <div className='w-full md:max-w-[70%] lg:mx-w-[50%] xl:mx-w-[35%] text-gray-200'>{truncateString(movie?.overview,150)}</div>
    </div>
            </div>
        </div>
    </div>
  )
}

export default Main;