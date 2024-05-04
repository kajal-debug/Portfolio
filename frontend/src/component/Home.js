import React from 'react';
import axios from 'axios';
import {Bio} from '../Themes/data';
import Typewriter from 'typewriter-effect';
import myimg from '../assests/img.png';
import { HomeContainer,Img,Resumebutton,Download ,SubTitle,Span,HomeBg, HomeInnerContainer,HomeLeftContainer,Title,TextLoop, HomeRightContainer } from './Home/HomeStyle';
import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip'; 

function Home() {
  const [tooltip,setTooltip]=React.useState(false);
  React.useEffect(()=>{
    setTooltip(false)
    console.log("hii")
  },[tooltip])
  const HandleDownload=async()=>{
    const cv = 'http://localhost:3000/KajalBaisakh_resume.pdf';
  try {
    const response = await axios.head(cv);
    const contentLength = parseInt(response.headers['content-length'], 10);

    let loaded = 0;

    const config = {
      onDownloadProgress: (progressEvent) => {
        loaded = progressEvent.loaded;
        // setProgress((loaded / contentLength) * 100);
        console.log("(loaded / contentLength) * 10000",(loaded / contentLength) * 100)
      },
      responseType: 'blob',
    };

    const fileResponse = await axios.get(cv, config);
    const blob = new Blob([fileResponse.data], { type: 'application/pdf' });
    const downloadUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'KajalBaisakh_resume.pdf'; // Replace with desired file name
    document.body.appendChild(a);
    a.click();
    a.remove();

  } catch (error) {
    console.error('Error downloading file:', error);
  }
  
  }
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
     
      <Download >
      <Resumebutton href={Bio.resume} target='_blank'>OpenCV</Resumebutton>
      <Tooltip  sx open={tooltip} title="Download CV" placement="bottom" arrow disableInteractive >  
       <DownloadIcon className='cloudDwn' onMouseOver={()=>setTooltip(true)} onMouseLeave={()=>setTooltip(false)}  onClick={HandleDownload} />
       </Tooltip>
      </Download> 
    </HomeLeftContainer>
    <HomeRightContainer>
    <Img className='logoimg' src={myimg}/>
    </HomeRightContainer>
  </HomeInnerContainer>
 </HomeContainer>
  )
}

export default Home;
