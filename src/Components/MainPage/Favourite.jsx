import React, {useState} from 'react'

const Favourite = ({apiData}) => {
  const [favoriteData, setFavoriteData] = useState([])
  console.log(apiData)
  return (
    <div>
      <div className="py-4">
        {favoriteData && favoriteData.length > 0 ? (
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
                <ul>
                  {''}
                  {favoriteData.map((favorite, index) => {
                    return <li key={index}>
                      <h1>{favorite.id}</h1>
                      <h1>{favorite.name}</h1>
                      <h1>Remove</h1>
                    </li>
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
