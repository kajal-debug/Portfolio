import {useRef,useEffect,useState, useCallback} from 'react';
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {darkTheme, lightTheme} from "./Themes/Themes";
import NavBar from './component/NavBar';
import Home from './component/Home';
import Light from './component/Light';
import Skill from './component/Skill';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Experience from './component/Experience';
import Project from './component/Project';
import { GlobalConsumer } from './component/Context';
import { useScrollTrigger } from '@mui/material';
import Contact from './component/Contact';
const Body = styled.div`
background-color: ${({theme})=>theme.bg};
width: 100%;
height:100%;
 overflow-x:hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
   clip-path: polygon(0 0, 100% 0, 100% 100%,50% 99%, 0 100%);
`
function App() {
  const {state} = GlobalConsumer();
  const[scroll,setScroll]=useState(false);
  // useEffect(()=>{
   
  //   //  setScroll(scrollRef.current)
  //   // debouncedScrollDownToProject.current(state.scroll);
  //   console.log("scrollToProjects",state.scroll)
  //   console.log("scrollToProjects useeffect",state.scroll)
   
  // },[state.scroll,scroll])
console.log("state.scroll scrollToProjects",state.scroll)
  const projectRef = useRef();
  // const scrollRef = useRef(state.scroll);
  const scrollDownToProject =(values,value1) => {
    // setScroll(prevScroll => {
      // const valuOfScrollref=scrollRef.current
      console.log("projectRef.current",projectRef.current,values,value1,scroll,"scrollToProjectscroll",state.scroll,state)
     
      const projectElement =projectRef.current;
      if (values && projectElement) {
      console.log("projectRef.current","projectElement",projectElement,projectRef.current,values,value1)
      const yOffset = window.pageYOffset;
      console.log("yOffset",window.pageYOffset)
      const targetOffset = projectElement.offsetTop;
      console.log("targetOffset",targetOffset)
      const scrollPosition =  targetOffset;
      console.log("scrollPosition",scrollPosition)
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
        block: "nearest"
      });
    //   projectRef.current.scrollIntoView({ 
    //     behavior: "smooth", 
    //     block: "nearest"
    //  })
     }
  //   return prevScroll;
  // });
  };
  console.log(state.light,"state from context")
  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // window.location.href = '../';
    window.history.pushState({}, '', './');
  };
  const UpArrow = styled(ExpandLessIcon)`
  ${({ theme }) => theme.uparrow}
`;
  return (
   <ThemeProvider theme={state.light?lightTheme:darkTheme}>
      <Body>
    <Router>
    <NavBar/>
   
      <Home />
    <Light className="changeHome"/>
        <Wrapper>
        <Link to="#skill" smooth>
          <Skill/>
        </Link>
       <Link to="#experience" smooth>
        <Experience  />
       </Link>
       <Link to="#project" smooth >
        <Project scrollDownToProject={scrollDownToProject} ref={projectRef}/>
       </Link>
       <Link to="#contact" smooth>
        <Contact />
       </Link>
      
         
         </Wrapper>  
    </Router> 
         </Body> 
    <UpArrow   onClick={scrollToTop}/>

   </ThemeProvider> 
  );
}

export default App;
