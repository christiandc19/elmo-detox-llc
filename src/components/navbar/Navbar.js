import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/nav-logo.png'
import {FiChevronDown } from "react-icons/fi";

import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    return (
        <div name='top' className='navbar'>
            <div className="navbar-container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                    <img src={logo} width="160px" height="80px" alt="Palm Springs Rehab Logo" loading="lazy"/>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Addiction <FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/alcohol`}> Alcohol</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/cocaine`}> Cocaine </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/fentanyl`}> Fentanyl </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/heroin`}> Heroin</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/kratom`}> Kratom </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mdma`}> MDMA </NavLink> </li>
                           <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/meth`}> Meth </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opiate`}> Opiate </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opioid`}> Opioid </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/oxycodone`}> Oxycodone </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/prescriptions`}> Prescription </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/xanax`}> Xanax </NavLink> </li>
                        </ul>
                    </li>


                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Mental Health <FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/acute-stress-disorder`}> Acute Stress Disorder </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/adhd`}> ADHD</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/anger-disorder`}> Anger Disorder </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/anxiety`}> Anxiety Disorder </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/bipolar-disorder`}> Bipolar Disorder </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/depression`}> Depression </NavLink> </li>
                             <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/panic-disorder`}> Panic Disorder </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/ptsd`}> PTSD </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/schizoaffective`}> Schizoaffective Disorder </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/schizophrenia`}> Schizophrenia </NavLink> </li>
                        </ul>
                    </li>



                    <li><Link to='/treatment'>Treatment</Link> </li>

                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> about us <FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/mission`}> Our Mission</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/team`}> Our Team</NavLink> </li>
                            {/* <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> Testimonials </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> FAQ </NavLink> </li> */}

                        </ul>
                    </li>





                    <li><Link to='/residence'>Residence</Link> </li>
                    <li><Link to='/jobs'>Jobs Program</Link> </li>
                    <li><Link to='/insurance'>Insurance</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar