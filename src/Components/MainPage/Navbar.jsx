import React from 'react'
import {auth} from '../firebase'
import {useNavigate} from 'react-router-dom'
import {signOut} from 'firebase/auth'

const Navbar = ({userEmail}) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
        console.log('Signed out successfully')
      })
      .catch(error => {
        console.error('Error signing out:', error)
      })
  }
  return (
    <>
      <div className=" border shadow-lg z-10 mb-3 shadow-gray-300">
        <div className="container mx-auto">
          <div className="flex justify-between py-3 ">
            <h3 className="uppercase font-bold text-xl">
              Nasa <span className="text-sm font-semibold">(Asteroid)</span>
            </h3>
            <p className="text-base cursor-pointer text-[#718096]">
              {userEmail ? `Hello! ${userEmail}` : 'Welcome'}
              <span className="px-2">|</span>
              <button onClick={handleLogout}>Logout</button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
