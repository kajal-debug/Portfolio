import React from 'react';
import  Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import Dot from '@mui/lab/TimelineDot';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { GlobalConsumer } from './Context';
import {Container,Company,Date,Maindocment,Description,Document,Documents,TextContainer,Span,Role,Body,Image,Top, TimelineSection, Skill,ItemWrapper,Skills,
  Title, Wrapper,Card} from './ExperienceStyle';
import {experiences,projects} from '../Themes/data';

function Experience() {
  const {updateCategory,Scroll} = GlobalConsumer();
  const handleChange =(experience)=>{
    updateCategory(experience)
    Scroll(true)
    // scrollDownToProject();
    // scrollvalue(true);
  }
  
  return (
    <Container id='experience'>
      <Wrapper>
        <Title>Experience</Title>
        <TimelineSection>
          <Timeline>
           { experiences.map((experience,index)=>{
         return   <TimelineItem>
             <TimelineSeparator>
              <Dot variant='outlined'/>
              {index !== experiences.length-1 && <TimelineConnector/>}
                </TimelineSeparator>

             <TimelineContent>
             <Card>
            <Top>
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill> {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
            <Maindocment>
           {/* <a href={experience.doc} target="new"></a> */}
            <Documents  key={index} >
               
                    <Document  src={experience.doc} />
                   <TextContainer onClick={()=>handleChange(experience.text)}>
        <p className="text" >{experience.text}</p> </TextContainer>
                </Documents>
                <Documents  key={index}>
               
               <Document  src={experience.doc1}  />
              <TextContainer onClick={()=>handleChange(experience.text1)} >
   <p className="text" >{experience.text1}</p> </TextContainer>
           </Documents>
               
                </Maindocment>
            }
        </Card>
 
             </TimelineContent>
            </TimelineItem>
           })}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default Experience;
