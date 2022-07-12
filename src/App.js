import React from 'react'
// scss
import "./App.scss";
// container
import { Header, About, Work, Testimonial, Skills, Footer } from './containers'
// comp
import { NavBar } from './components'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App