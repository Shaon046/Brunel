import React from 'react'
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className=" h-16 p-2 w-full rounded-[56px] border-[1px] border-primary-gray-dark flex justify-between items-center">
    <img src={logo} alt="Logo" className="h-[47px]  " />

    <div className="text-[18px] ">
      <Link to="/register">
        <button className="p-3 rounded-[56px] border-[1px] border-primary-gray-dark mr-2 hover:bg-primary-gray-mid">
          Get Projects
        </button>
      </Link>

      <button className="p-3 rounded-[56px] bg-primary-black text-white hover:bg-primary-gray-dark ">
        Onboard Talents
      </button>
    </div>
  </div>
  )
}

export default NavBar