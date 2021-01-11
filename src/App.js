import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import './App.css'
import CTA from './Components/CTA/CTA'
import CTA2 from './Components/CTA2/CTA'
import Services from './Components/Services/Services'
import RecentWork from './Components/RecentWork/RecentWork'
function App() {
  return (
    <div>
      <Navigation />
      <CTA />
      <Services />
      <RecentWork  />
      <CTA2 />
    </div>
  )
}

export default App
