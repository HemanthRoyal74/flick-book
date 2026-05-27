import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedSection from '../components/FeaturedSection'
import TrailersSection from '../components/TrailersSection'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* ─── DARK GRADIENT OVERLAY ─── */}
      {/* This layer dims the background image so white text pops clearly */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-zinc-950 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* ─── CONTENT SECTIONS ─── */}
      <div className="relative z-20">
        <HeroSection />
        <FeaturedSection />
        <TrailersSection />
      </div>
    </div>
  )
}

export default Home
