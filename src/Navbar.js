import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [navbarVisible, setNavbarVisible] = React.useState(false)



    const toggleNavBar = () => {
        setNavbarVisible(prev => !prev);
        console.log('toggling')

    }

    const navBarClasses = navbarVisible ? ['collapse', 'navbar-collapse', 'show'] : ['collapse', 'navbar-collapse']
    return (
        <div className="full" >
            <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg  bg-light">
                <a style={{ color: 'grey', fontSize: '16px' }} className="navbar-brand" href="/">adnan @represent</a>
                <button onClick={toggleNavBar} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={navBarClasses.join(' ')} id="navbarNavAltMarkup">
                    <div className="navbar-nav" onClick={toggleNavBar}>
                        <NavLink exact to='/' className="nav-item nav-link" >Home <span className="sr-only"></span></NavLink>
                        <NavLink to='/projects' className="nav-item nav-link" >Projects</NavLink>
                        <NavLink to='/articles' className="nav-item nav-link" >Articles</NavLink>
                    </div>
                </div>
            </nav >
        </div >
    )

}

export default Navbar;