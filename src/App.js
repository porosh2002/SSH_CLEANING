import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import './App.css'
import CTA from './Components/CTA/CTA'
import CTA2 from './Components/CTA2/CTA'
import Services from './Components/Services/Services'
import RecentWork from './Components/RecentWork/RecentWork'
import News from './Components/News/News'
import Clients from './Components/Customers/Clients'
import Footer from './Components/Footer/Footer'
import SubFooter from './Components/Footer/SubFooter'
function App() {
  return (
    <div>
      <Navigation />
      <CTA />
      <Services />
      <RecentWork  />
      <News />
      <Clients />
      <CTA2 />
      <Footer />
      <SubFooter />
    </div>
  )
}

export default App
