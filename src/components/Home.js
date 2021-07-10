import React from 'react'
import Porfolios from './resume/Porfolios'
import Profile from './resume/Profile'
import About from './resume/About'
import Skills from './resume/Skills'
import Educations from './resume/Educations'
import Footer from './resume/Footer'

const Home = () => {
    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m4 l3'>
                        <Profile />
                    </div>
                    <div className='col s12 m8 l9'>
                        <About />
                        <Skills />                        
                        <Educations />
                        <Porfolios />                      
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Home
