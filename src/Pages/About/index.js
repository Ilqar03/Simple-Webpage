import React from 'react'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar'
import "./index.scss"

function About() {
  return (
    <div>
        <Navbar/>
        <main className='about'>
          <section className='about_me'>
            <h1>About Me</h1>
            <h4>This is what I do</h4>
            
          </section>
          <div className='icon'>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-github"></i>
              </div>
        </main>
        <Footer/>
        </div>
  )
}

export default About