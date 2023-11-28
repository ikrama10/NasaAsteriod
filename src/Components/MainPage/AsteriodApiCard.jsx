import React, { useState,useEffect } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


const AsteriodApiCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []); 

  const fetchFavorites = async () => {
    try {
      const response = await axios.get("http://localhost:3500/Favourite");
      setFavoriteData(response.data);
    } catch (error) {
      console.error("Error fetching favorites", error);
    }
  };

  const addFavorite = async () => {
    try {
      const response = await axios.post("http://localhost:3500/Favourite", {
        id: props.id,
        name: props.name,
        date: props.date,
        time: props.time,
        ab_magnitude: props.ab_magnitude,
        max_diameter: props.max_diameter,
        min_diameter: props.min_diameter,
        rel_velocity: props.rel_velocity,
        hazard: props.hazard,
      });
    

      if (response.status === 201) {
        setIsFavorite(true);
        fetchFavorites();
      }
      console.log(response)
    } catch (error) {
      console.error("Error adding to favorites", error);
    }
  };
  const removeFavorite = async () => {
    try {
      const response = await axios.delete(`http://localhost:3500/Favourite/${props.id}`);

      if (response.status === 200) {
        setIsFavorite(false);
        fetchFavorites();

      }
    } catch (error) {
      console.error("Error removing from favorites", error);
    }
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };
  
  return (
    <div className={`AsteriodsApiCard py-1 cursor-pointer ${isFavorite ? "favorite" : ""}`}>
      <ul className="flex justify-between py-3 bg-white hover:bg-blue-300 text-sm font-normal text-gray-800 border-gray-800 shadow-sm">
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
        <li className="favourite w-2/12 px-1 text-center cursor-pointer" onClick={handleFavoriteClick}>
          
          <FontAwesomeIcon icon={isFavorite ? faSolidHeart : faHeart} />
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