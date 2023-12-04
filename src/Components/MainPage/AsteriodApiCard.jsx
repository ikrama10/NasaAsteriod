import React, { useState,useEffect } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


const AsteriodApiCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(false)


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
        <li className="favourite w-2/12 px-1 text-center cursor-pointer">
          {/* <button onClick={props.handleFavourite()}><FontAwesomeIcon icon={isFavorite ? faSolidHeart : faHeart} /></button> */}
        </li>
      </ul>
      {/* <ul>
        {favoriteData.map((favorite) => (
          <li key={favorite.id}>
            {`ID: ${favorite.id},
             Name: ${favorite.name}`}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default AsteriodApiCard;