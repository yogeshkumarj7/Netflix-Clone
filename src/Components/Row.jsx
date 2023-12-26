import React, { useEffect, useState } from 'react'
// import Requests from '../Request'
import axios from "axios";
import {MdChevronLeft,MdChevronRight} from "react-icons/md";  
import Movie from './Movie';
const Row = ({title,fetchURL}) => {
    const[movies,setMovies]=useState([]);  
    

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);  
        });
    }, [fetchURL]);
    
    const slideLeft=()=>{
        var slider=document.getElementById('');
    }
     
  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center'>
            <MdChevronLeft size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden'/>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar  '>
                {
                    movies.map((movie,id)=>(
                       <Movie key={id } movie={movie}/>))
                }
            </div>
            <MdChevronRight size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden'/>
        </div>
    </>

  )
}
export default Row;