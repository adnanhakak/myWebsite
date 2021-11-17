import React from 'react';
// import Navbar from './Navbar';
import './Landing.css';
import img from './images/pexels-hasan-albari-1229861.jpg'
import 'bootstrap'
// import { NavLink } from 'react-router-dom';

const Landing = () => {

    return (
        <div >

            <div className='text'>
                <h1 className='h1' >Adnan_hakak</h1>
                <hr className="hr" />

                <br />
                <h2> Front-end/(UI) Developer</h2>
                <br />
                <p>
                    Designing and developing responsive user interface with ability to work with or without team,<br />
                    Creating clean ,testable ,maintainable and functional code is highest priority.<br />

                    Html / CSS / Bootstrap / Semantic-UI / JavaScript / jQuery / WordPress /<br />
                    React.js / Redux & Material-UI...  <br />

                </p>
                <hr />
                <h4> Get in touch with me  </h4>
                <div className='social'>
                    <a style={{ color: '#1DA1F2' }} target='_blank' rel="noreferrer" href="https://twitter.com/_4ah_"><i className="fab fa-twitter icon"></i></ a>
                    <a style={{ color: '#fbad50' }} target='_blank' rel="noreferrer" href="https://www.instagram.com/_"><i class="fab fa-instagram"></i></a>
                    <a style={{ color: '#f5f5f5' }} target='_blank' rel="noreferrer" href="https://github.com/adnanhakak"><i class="fab fa-github"></i></a>


                </div>
            </div>
            <div className='landing'>

                <img className='image' src={img} alt='...' />
            </div>
        </div >
    )

}

export default Landing;