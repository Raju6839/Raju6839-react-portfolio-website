import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
              <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiance</h5>
                <small>+3 Years Working </small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
                <small>200+ Clients Together</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
                <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking 
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
          as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
