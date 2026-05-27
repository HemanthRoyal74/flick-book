import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()

  return (
    <div className='relative flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen overflow-hidden'>
      
      {/* ─── INLINE CONTRAST TINT LAYER ─── */}
      {/* This guarantees white hero components remain fully legible on bright wallpapers */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-0 pointer-events-none' />

      <div className='relative z-10 flex flex-col items-start gap-4 bg-black/20 p-6 rounded-2xl backdrop-blur-[2px] border border-white/5 max-w-2xl'>
        <img src={assets.marvelLogo} alt="Marvel Studios" className="max-h-11 lg:h-11" />

        {/* Updated Premium Movie Title Layout */}
        <h1 className='text-5xl md:text-[64px] md:leading-[70px] font-bold text-white drop-shadow-md uppercase tracking-tight'>
          Avengers: <br /> Endgame
        </h1>

        {/* Updated Metadata Tags */}
        <div className='flex flex-wrap items-center gap-4 text-sm font-medium text-gray-200'>
          <span className='bg-red-600/80 px-3 py-0.5 rounded-full text-xs uppercase tracking-wider text-white'>
            Action | Adventure | Sci-Fi
          </span>
          <div className='flex items-center gap-1 drop-shadow'>
              <CalendarIcon className='w-4 h-4 text-red-500'/> 2019
          </div>
          <div className='flex items-center gap-1 drop-shadow'>
              <ClockIcon className='w-4 h-4 text-red-500'/> 3h 1m
          </div>
        </div>

        {/* Updated Accurate Movie Synopsis */}
        <p className='max-w-xl text-base leading-relaxed text-gray-300 drop-shadow-sm'>
          After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
        </p>

        <button onClick={()=> navigate('/movies')} className='mt-2 flex items-center gap-2 px-7 py-3.5 text-sm bg-red-600 hover:bg-red-700 text-white transition-all duration-200 rounded-full font-semibold shadow-lg hover:shadow-red-600/20 cursor-pointer group'>
           Explore Movies
           <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"/>
        </button>
      </div>
    </div>
  )
}

export default HeroSection
