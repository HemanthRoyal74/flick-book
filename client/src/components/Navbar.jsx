import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, XIcon, Ticket } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {

 const [isOpen, setIsOpen] = useState(false)
 const {user} = useUser()
 const {openSignIn} = useClerk()

 const navigate = useNavigate()

 const {favoriteMovies} = useAppContext()

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5'>
      {/* ─── CUSTOM FLICKBOOK TEXT LOGO ─── */}
      <Link to='/' className='max-md:flex-1 flex items-center gap-2 select-none bg-transparent' onClick={()=> scrollTo(0,0)}>
        {/* Clean Red Cinema Ticket Icon */}
        <Ticket className="w-8 h-8 text-red-600 fill-red-600 drop-shadow-[0_2px_8px_rgba(220,38,38,0.5)]" />
        
        {/* Bold White Typography Layout */}
        <span className="text-2xl font-bold tracking-tight text-white font-sans drop-shadow-md uppercase">
          FlickBook
        </span>
      </Link>

      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>

        <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-white' onClick={()=> setIsOpen(!isOpen)}/>

        <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/' className="text-white hover:text-red-500 transition-colors">Home</Link>
        <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/movies' className="text-white hover:text-red-500 transition-colors">Movies</Link>
        <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/' className="text-white hover:text-red-500 transition-colors">Theaters</Link>
        <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/' className="text-white hover:text-red-500 transition-colors">Releases</Link>
       {favoriteMovies.length > 0 && <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/favorite' className="text-white hover:text-red-500 transition-colors">Favorites</Link>}
      </div>

    <div className='flex items-center gap-8 text-white'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer hover:text-red-500 transition-colors'/>
        {
            !user ? (
                <button onClick={openSignIn} className='px-4 py-1 sm:px-7 sm:py-2 bg-red-600 hover:bg-red-700 transition rounded-full font-medium cursor-pointer text-white'>Login</button>
            ) : (
                <UserButton>
                    <UserButton.MenuItems>
                        <UserButton.Action label="My Bookings" labelIcon={<TicketPlus width={15}/>} onClick={()=> navigate('/my-bookings')}/>
                    </UserButton.MenuItems>
                </UserButton>
            )
        }
        
    </div>

    <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer text-white' onClick={()=> setIsOpen(!isOpen)}/>

    </div>
  )
}

export default Navbar
