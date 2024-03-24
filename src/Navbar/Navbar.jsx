import React, { useState, useEffect, useRef } from 'react';

// import DropDown from "./Ddown"
import Ddown from '../components/Ddown/Ddown';
import './Navbar.scss';
import { BsCaretDownFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import logoimage from '../assets/images/Logo.png'

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const divRef = useRef(null);
  const [windows, setWindows] = useState(window.innerWidth);
  const [navItems, setNavItems] = useState([
    { label: 'Home', link: '/' },
    { label: 'About', link: '/' },
    { label: 'Contact', link: '/' },
    { label: 'Transport', link: '/' },
    { label: 'Electronics', link: '/' },
    { label: 'Flowers', link: '/' }
  ]);
  const [subItems,setSubItems]=useState([{ label: 'transport', link: '/' },
  { label: 'clothes', link: '/' },
  { label: 'dukan', link: '/' }])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    while ((Math.floor((windowWidth)/200))<navItems.length&&navItems.length>0) {
      const removedItem = navItems.pop();
      setSubItems((pre)=>[...pre,removedItem]);
      setNavItems([...navItems]);
      setWindows(windowWidth);
    }
    while((Math.floor((windowWidth)/200)>navItems.length)&&subItems.length>3){
      const removedItem = subItems.pop();
      setNavItems((pre)=>[...pre,removedItem]);
      setSubItems([...subItems]);
      setWindows(windowWidth);
    }
    console.log(Math.floor((windowWidth)/200));

  }, [windowWidth]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="leftContainer">
          
          <img className='logo' src={logoimage} alt="Logo" />
        </div>
        {/* <input type="checkbox" id="nav-toggle" className="nav-toggle" /> */}
        <div className='toggled' ref={divRef}>
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <Ddown key={index} item={item} />
            ))}
            <li className="nav-item dropdown">
              {/* <label htmlFor="nav-toggle" className="nav-link">More˅</label>  */}
              <div className="moreContainer">
                <p className='morebutton'>More</p>
                <BsCaretDownFill className='dropIcon'/>
              </div>
        
              <ul className="dropdown-menu">
                {subItems.map((subItem, index) => (
                  <li key={index}><a href={subItem.link} className="dropdown-item">{subItem.label}</a></li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="rightContainer">
            <CiSearch className='searchIcon'/>
            <input type="text" name="" id=""  className='searchbar' placeholder='search...'/>
          
        </div>
      </div>
    </nav>
  );
};

// const NavItem = ({ item }) => {
//   const { label, link, subItems } = item;

//   if (subItems) {
//     return (
//       <li className="nav-item dropdown">
//         <label htmlFor="nav-toggle" className="nav-link">{label}</label>
//         <ul className="dropdown-menu">
//           {subItems.map((subItem, index) => (
//             <li key={index}><a href={subItem.link} className="dropdown-item">{subItem.label}</a></li>
//           ))}
//         </ul>
//       </li>
//     );
//   } else {
//     return (
//       <li className="nav-item">
//         <a href={link} className="nav-link">{label}</a>
//       </li>
//     );
//   }
// };

export default Navbar;