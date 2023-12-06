import React, {useState} from 'react'
import {faHeart as heartSolid} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Favourite = props => {
  // const [favoriteData, setFavoriteData] = useState([])

  return (
    <div>
      <div className="py-4">
        {props.matchedData && props.matchedData.length > 0 ? (
          <>
            <h2 className="text-2xl text-gray-500 font-semibold text-center">
              Favourite Asteriods
            </h2>
            <div className="fav-upper flex justify-center">
              <ul className="w-6/12 flex justify-between">
                <li className="w-4/12 px-3">ID</li>
                <li className="w-4/12 px-1">Name</li>
                <li className="text-center w-4/12 px-1">
                  Remove From Favorite
                </li>
              </ul>
            </div>
            <div className="fav-lower">
              <div className="w-6/12 mx-auto">
                <ul >
                  
                  {''}
                  {props.matchedData.map((data, index) => {
                    return (
                      <li className='flex justify-between w-[100%] pt-4' key={index}>
                        <h1>{data.id}</h1>
                        <h1>{data.name}</h1>
                        <FontAwesomeIcon
                          icon={heartSolid}
                          className="text-xl text-gray-800 w-[36%]"
                          onClick={()=>{props.removeFavAsteriod(data.id)}}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <h2 className="text-2xl text-gray-500 font-semibold">
              No Favourite Asteriods Found Yet
            </h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default Favourite
