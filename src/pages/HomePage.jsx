import React from 'react'
import Navbar from '../components/student/Navbar'
import Hero from './student/Hero';
import GradesSection from '../components/student/GradesSection';
import Footer from '../components/student/Footer';
function HomePage() {
    return (
      <>
        <Navbar />
        <Hero />
        <GradesSection />
        <Footer />
      </>
    );
}

export default HomePage
