import React,{useState} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import myimg from '../assests/img.png';
import { IoMenu } from "react-icons/io5";
import {Bio} from "../Themes/data";
import { Nav, NavContainer,  NavItems, GithubButton, ButtonContainer,MobileMenu, MobileIcon } from './Navstyle';
import { useTheme } from '@emotion/react';

function NavBar() {
  const theme = useTheme();
  const[open,setOpen]= useState(false);
 
  return (
    <div>
      <Nav>
        <NavContainer>
            {/* <NavLogo> */}
              <img className='logoimg' src={myimg}/>
              {/* </NavLogo> */}
            <MobileIcon>
            <IoMenu onClick={()=>{setOpen(!open)}} />
            </MobileIcon>
            <NavItems>
                {/* <Link className='NavLink' to="#home"  smooth>Home</Link>
                <Link className='NavLink' to="#about"  smooth>About</Link> */}
                <Link className='NavLink' to="#skill" smooth>Skill</Link>
                <Link className='NavLink' to="#experience"  smooth>Experience</Link>
                <Link className='NavLink'  to="#project" smooth>Project</Link>
                <Link className='NavLink'  to="#contact" smooth>Contact</Link>
            </NavItems>
            <ButtonContainer>
                <GithubButton to={Bio.github} target='_blank'>Github Profile</GithubButton>
            </ButtonContainer>
        </NavContainer>
        {
          open && (
            <MobileMenu open={open}> 
           {/* <Link className='mobileMenuLink' onClick={()=>{setOpen(!open)}}
           to="#home">Home</Link>
                <Link className='mobileMenuLink' onClick={()=>{setOpen(!open)}}
                 to="#about">About</Link> */}
                <Link className='mobileMenuLink' onClick={()=>{setOpen(!open)}}
                 to="#skill">Skill</Link>
                <Link className='mobileMenuLink' onClick={()=>{setOpen(!open)}}
                 to="#experience">Experience</Link>
                 <Link className='mobileMenuLink' onClick={()=>{setOpen(!open)}}
                 to="#project">Project</Link>
                 <Link className='mobileMenuLink' onClick={()=>{setOpen(!open)}}
                 to="#contact">Contact</Link>
                <Link className='mobileMenuLink'
              
                to={Bio.github} >Github Profile</Link>
            </MobileMenu>
          ) 
        }
      </Nav>
    </div>
  )
}

export default NavBar;
