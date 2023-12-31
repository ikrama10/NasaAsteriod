import React, {useState,useEffect} from 'react'
import AsteriodApiCard from './AsteriodApiCard'
import axios from 'axios'
import Favourite from './Favourite'

const AsteriodApi = (props) => {
  //   console.log(props.apiData)
  const hasData = props.apiData && props.apiData.length > 0
  const [diameterUnit, setDiameterUnit] = useState('km')
  const [velocityUnit, setVelocityUnit] = useState('km/s')
  // const [apiData, setApiData] = useState(props.apiData || []);
  const [isFav,setIsFav]=useState()


 

  const [test, setTest] = useState([])
  const handleFavourite = () => {
    setTest(prevTest => [...prevTest, props.apiData])
  }

  const handleDiameterUnitChange = event => {
    setDiameterUnit(event.target.value)
  }
  const handleVelocityUnitChange = event => {
    setVelocityUnit(event.target.value)
  }

 
  return (
    <>
      {props.apiError ? (
        <h2 className="text-2xl font-semibold text-gray-500 text-center">
          {props.apiError}
        </h2>
      ) : (
        hasData && (
          <>
            <div className="dataHead py-5">
              <ul className="flex justify-center items-center text-gray-500  text-sm font-semibold">
                <li className="w-1/12 px-3">ID</li>
                <li className="w-1/12 px-1">Name</li>
                <li className="w-1/12 px-1">Date</li>
                <li className="w-1/12 px-1">Time</li>
                <li className="w-2/12 px-1">Ab Magnitude</li>
                <li className="w-2/12 px-2 flex justify-start items-center">
                  <p>Min - Max Est Diamater</p>
                  <select
                    name="diameter"
                    className="p-1 ml-3"
                    value={diameterUnit}
                    onChange={handleDiameterUnitChange}
                  >
                    <option value="km">Kilo Meters</option>
                    <option value="meters">Meters</option>
                    <option value="miles">Miles</option>
                    <option value="Feets">Feets</option>
                  </select>
                </li>
                <li className="w-2/12 px-2 flex justify-start items-center">
                  <p>Relative Velocity</p>
                  <select
                    name="velocity"
                    className="p-1 ml-3 "
                    value={velocityUnit}
                    onChange={handleVelocityUnitChange}
                  >
                    <option value="km/s">KM/sec</option>
                    <option value="km/h">KM/Hour</option>
                    <option value="miles/h">Miles/Hours</option>
                  </select>
                </li>
                <li className="w-1/12 px-1 text-center">Hazard</li>
                <li className="w-2/12 px-1 text-center">Add To Favourite</li>
              </ul>
            </div>

            {props.apiData.map((data, index) => (
              <div key={index}>
                {data.close_approach_data.map((approach, approachIndex) => {
                  // console.log(props.favourite[0].asteriodId);
                  const isFav =props.favourite.some(
                    (fav) =>fav.asteriodId===data.id

                  )
                  const formattedTime = new Date(
                    approach.close_approach_date_full,
                  ).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })

                  return (
                    <AsteriodApiCard
                      handleFavourite={handleFavourite}
                      key={approachIndex}
                      id={data.id}
                      name={data.name}
                      date={approach.close_approach_date}
                      time={formattedTime}
                      ab_magnitude={data.absolute_magnitude_h}
                      max_diameter={convertDiameter(
                        data.estimated_diameter.kilometers
                          .estimated_diameter_max,
                        diameterUnit,
                      )}
                      min_diameter={convertDiameter(
                        data.estimated_diameter.kilometers
                          .estimated_diameter_min,
                        diameterUnit,
                      )}
                      rel_velocity={convertVelocity(
                        approach.relative_velocity.kilometers_per_second,
                        velocityUnit,
                      )}
                      hazard={data.is_potentially_hazardous_asteroid}
                      isFav={isFav}
                      removeFavAsteriod={() => props.handleRemoveFav(data.id)}
                      addFavAsteriod={() => props.addFavAsteriod(data.id)}
                    />
                  )
                })}
              </div>
            ))}
          </>
        )
      )}
    </>
  )
}

const convertDiameter = (value, unit) => {
  switch (unit) {
    case 'meters':
      return value * 1000
    case 'miles':
      return value * 0.621371
    case 'feet':
      return value * 3280.84
    default:
      return value
  }
}
const convertVelocity = (value, unit) => {
  switch (unit) {
    case 'km/h':
      return value * 3600
    case 'miles/h':
      return value * 3600 * 0.621371
    default:
      return value
  }
}

export default AsteriodApi
