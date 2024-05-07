import React,{ useState,useEffect,useRef,forwardRef,
useMemo } from 'react';
import { GlobalProvider } from './Context';
import { Container,Date,Tag,Tags,
   Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyle';
import {projects} from '../Themes/data';
import { GlobalConsumer } from './Context';

const Project =forwardRef((props,projectRef) => {
  const {state} = GlobalConsumer();
  const [toggle, setToggle] = useState('project1');
  const [prevalue, setPrevalue] = useState('');
  const timerIdRef = useRef(state.category);
 
  
  const handleClick=(data)=>{
    setToggle(state.category===""||state.category!==data?data:state.category);
    console.log("state.category",state.category)
  }
  const debouncedScrollDownToProject = useRef(((state) => {
    let timeout;
    console.log(state,"state")
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        props.scrollDownToProject(document.getElementById('project'));

      }, 300); // Adjust the debounce delay as needed
    };
  })());


// Usage
// useEffect(() => {
//   if (debouncedScrollDownToProject.current) {
//     clearTimeout(debouncedScrollDownToProject.current);
//   }
// }, [state]);


  useEffect(() => {
    // Store the previous value whenever the value changes
    timerIdRef.current = toggle;
    setPrevalue(timerIdRef.current)   
  }, [toggle,state.category]);
  useEffect(()=>{
    // clearInterval(timerIdRef.current);
    // timerIdRef.current = setInterval(() => {
      switch (true) {
        case state.category === "" || toggle  !== prevalue:
          return setToggle(toggle)
        case state.category === toggle && toggle  == prevalue:
          return ( console.log("1",prevalue,toggle,state.category),
          // props.scrollDownToProject(state.scroll,document.getElementById('project')),
          debouncedScrollDownToProject.current(), 
          setToggle(state.category))
          case state.category !== prevalue && toggle  == prevalue:
            return (console.log("2",prevalue,toggle,state.category), 
            // props.scrollDownToProject(state.scroll,document.getElementById('project')),
            debouncedScrollDownToProject.current(),
            setToggle(state.category))
            case toggle  !== prevalue :
              return ( console.log("3",prevalue,toggle),
                setToggle(toggle)
               
                )
        default:
          return toggle;
          
      }
      let hasScrolled = true;
      if(state.category === "" || toggle !== prevalue  ){
        console.log("1pre",prevalue,"toggle",toggle)
        setToggle(toggle);
        hasScrolled = true;
      }
     
      else {
        // If state.category matches the current toggle, scroll down and set the toggle
        if (state.category === toggle&& toggle === prevalue || state.category !== prevalue || state.category !== prevalue && toggle !== prevalue) {
          console.log("2pre",prevalue,"toggle",toggle,"state.category",state.category)
          // debouncedScrollDownToProject.current();
          setToggle(state.category);
        } 
      }
      // else if (state.category === toggle) {
      //   console.log("2state.category",state.category)
       
      //     hasScrolled = false; 
      //     debouncedScrollDownToProject.current();
      //     setToggle((prevToggle) => prevToggle);
      //     // Set the flag to true after scrolling once
        
      //   // setToggle(toggle);
      //   return;
      // }
      // else if (state.category !== toggle || state.category !== prevalue) {
      //   console.log("3")
      //   setToggle(state.category);
      //   debouncedScrollDownToProject.current();
      //   hasScrolled = true;
      // }else if(toggle !== prevalue){
      //   setToggle(toggle)
      // }
     
    // }, 1000);
    // return () => clearInterval(timerIdRef.current);
    // Clean up the timer when the component unmounts
    
    
  },[state.category,toggle,props.scrollDownToProject])
  const memoizedToggle = useMemo(() => toggle, [toggle]);
  return (
    <Container id="project"  ref={projectRef}>
      <Wrapper >
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps . Here are some of my projects.
        </Desc>
        <ToggleButtonGroup ref={timerIdRef}>
          {toggle === 'project1' ?
            <ToggleButton active value="project1" onClick={() => handleClick('project1')}>Patients Therapy</ToggleButton>
            :
            <ToggleButton value='project1' onClick={() => handleClick('project1')}>Patients Therapy</ToggleButton>
          }
          <Divider />
          {toggle === 'project2' ?
            <ToggleButton active value='project2' onClick={() => handleClick('project2')}>Ajax Web Application</ToggleButton>
            :
            <ToggleButton value='project2' onClick={() => handleClick('project2')}>Ajax Web Application</ToggleButton>
          }
          <Divider />
          {toggle === 'project3' ?
            <ToggleButton active value="project3" onClick={() => setToggle('project3')}>WoW Meet Web </ToggleButton>
            :
            <ToggleButton value="project3" onClick={() => setToggle('project3')}>WoW Meet Web </ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer> 
          {/* {toggle === 'all' && projects
            .map((project) =>  (
             <h2>
               {project.title}
              </h2>
            ))} */}
          {projects
          // .filter((item) => item.category === memoizedToggle)
             .filter((item) => item.category == toggle)
            .map((project) => (
              <>
               <Title>{project?.title}</Title>
                    
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag onClick={(event) => {
                              event.preventDefault()
                            }}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Date>{project.date}</Date>
              <div className='about' dangerouslySetInnerHTML={{ __html: project.about }} />
              </>
               ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}
)
export default Project;