import React from 'react';
import {useState} from 'react';
import {FaStar} from "react-icons/fa";
import './App.css';




function StarRatingComponent(){
    const [rating,setRating]=useState(null);
    return(
      <div>
          {[...Array(5)].map((star,id)=>{
              const ratingValue=id+1;
             return(   
                      <label key={id}>
                      <input type="radio" name="star" value={ratingValue} onClick={()=>setRating(ratingValue)}/>
                      <FaStar className="rating" key={id} size={30} color={ratingValue<=rating? "yellow":"grey"} /> 
                      </label>
                  )
          })}
         
      </div>
    )
}

export {StarRatingComponent};
