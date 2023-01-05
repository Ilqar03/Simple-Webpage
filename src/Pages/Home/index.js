import React from 'react'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar'
import "./index.scss"
function Home() {
  return (
    <div>
        <Navbar/>
        <main>
          <section className='clean'>
            <div className='button'>
            <button className='try'>TRY LOGINIG IN</button>
            </div>
            
            <h1>Clean Blog</h1>
            <p>Blog Theme by Start Bootstrap</p>
          </section>
          <section className='write'>
            <div className='words'>
              <div className='h'>
              <h2>Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.</h2>
              <h4>Labore irure irure laborum quis tempor aliqua. Dude</h4>
              </div>
              <p>February 19, 2020</p>
            </div>
            <div className='words'>
            <div className='h'>
              <h2>Dolore pariatur amet ullamco aliquip mollit aliqua qui.</h2>
              <h4>Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.</h4>
            </div>
              <p>February 17, 2020</p>
            </div>
            <div className='words'>
            <div className='h'>
              <h2>Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.</h2>
              <h4>Adipisicing sit minim occaecat nulla proident exercitation do laboris.</h4>
              </div>
              <p>February 15, 2020</p>
            </div>

            <div className='icon'>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-github"></i>
              </div>
          </section>
        </main>
        <Footer/>
        </div>
  )
}

export default Home