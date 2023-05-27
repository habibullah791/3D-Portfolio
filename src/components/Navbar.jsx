import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { navLinks } from "../constants";
import { styles } from "../styles";
import { logo, menu, close } from '../assets';



const Navbar = () => {


  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.paddingX} w-full flex justify-between items-center  max-w-7xl py-5 z-20 m-auto`}>
      <Link to="/"
        className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <img
          src={logo} alt='logo'
          className='w-9 h-9 object-contain'
        />
        <p className='text-white text-[18px] font-bold cursor-pointer flex'>Habib &nbsp; <span className='sm:block hidden'>|&nbsp; Software Engenieer</span></p>
      </Link>

      <ul className='list-none hidden sm:flex flex-row  gap-10'>
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      
      <div className='sm:hidden flex flex-1 justify-end item-center'>
        <img
          src={toggle ? close : menu}
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}
        />
        <div className={`${!toggle ? "hidden" : "flex"} black-gradient p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex-col gap-4 item-start'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle)
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar