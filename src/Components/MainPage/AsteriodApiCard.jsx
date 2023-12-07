import React, { useState,useEffect } from "react";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


const AsteriodApiCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(false)
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      props.removeFavAsteriod(props.id);
    } else {
      props.addFavAsteriod(props.id);
    }
  };
  useEffect(() => {
    setIsFavorite(props.isFavorite);
  }, [props.isFavorite]);


  return (
    <div className="AsteriodsApiCard py-1 cursor-pointer ">
      <ul className="flex justify-between py-3 bg-white hover:bg-gray-300 text-sm font-normal text-gray-800 border-gray-800 shadow-sm">
        <li className="w-1/12 px-3">{props.id}</li>
        <li className="w-1/12 px-1">{props.name}</li>
        <li className="w-1/12 px-1">{props.date}</li>
        <li className="w-1/12 px-2">{props.time}</li>
        <li className="w-2/12 px-2">{props.ab_magnitude}</li>
        
        <li className="w-2/12 px-3">
          {props.max_diameter} - {props.min_diameter}
        </li>
        <li className="w-2/12 px-3">{props.rel_velocity}</li>
        <li className="w-1/12 px-1 text-center">
          {props.hazard ? "Yes" : "No"}
        </li>
        <li className="w-2/12 px-1 flex items-center justify-center">
          <FontAwesomeIcon
            icon={isFavorite ? heartSolid : heartRegular}
            className="text-xl text-gray-800"
            onClick={toggleFavorite}
          />
        </li>
        
      </ul>
      
    </div>
  );
};

export default AsteriodApiCard;