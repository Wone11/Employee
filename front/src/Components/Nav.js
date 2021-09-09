import React from 'react'
import menuData from '../Data/Menudata';
import { Button } from '../Components/Button';
import {animateScroll as scroll} from 'react-scroll';
import {
  Nav,
  NavBtn,
  NavIcon,
  NavMenuLinks,
  Menubars,
  Navmenu,
  Logo

} from './NavBar/NavBarElements.js';

//function to scroll home 
const ScrollToHome =()=>{
  scroll.scrollToTop();
}

const Navbar=({toggle})=> {
  return (
    <Nav>
      <Logo to='/' onClick={ScrollToHome}>
        <NavIcon /> EMS        
        </Logo>
      <Menubars onClick = {toggle}/>
      <Navmenu>
       {menuData.map((item,index)=>( 
        <NavMenuLinks to ={item.Link} key ={index} >
          {item.Link}
        </NavMenuLinks>
  ))}
      </Navmenu>
      <NavBtn>
        <Button to ='contact' primary='true' onClick={ScrollToHome}>Contact Us</Button>
      </NavBtn>
    </Nav>
  );
}
export default Navbar;
