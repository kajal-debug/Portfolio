import React from 'react';
import './Home/HomeStyle';
import {Bio} from '../Themes/data';
import Typewriter from 'typewriter-effect';
import myimg from '../assests/img.png';
import { HomeContainer,Img,Resumebutton ,SubTitle,Span,HomeBg, HomeInnerContainer,HomeLeftContainer,Title,TextLoop, HomeRightContainer } from './Home/HomeStyle';
import { Link } from 'react-router-dom';
function Home() {
  return (
 <HomeContainer>
  <HomeBg>
  </HomeBg>
  <HomeInnerContainer>
    <HomeLeftContainer>
      <Title>

      hi 👋 i'm<br/> {Bio.name}
      </Title>
      <TextLoop>
<Span>
  I'm a
  <Typewriter
  options={{
    strings:Bio.roles,
    autoStart:true,
    loop:true,
  }}
  />
</Span>
      </TextLoop>
      
      <SubTitle>{Bio.description}</SubTitle>
      <Resumebutton href={Bio.resume} target='_blank'>OpenCV</Resumebutton>
    </HomeLeftContainer>
    <HomeRightContainer>
    <Img className='logoimg' src={myimg}/>
    </HomeRightContainer>
  </HomeInnerContainer>
 </HomeContainer>
  )
}

export default Home;
