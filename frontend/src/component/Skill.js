import React from 'react';
import StarRating from './StarRating';
import {skills} from '../Themes/data';
import {Container,SkillImage,SkillTitle,SkillList,Skills,Wrapper,SkillItem,Title,Desc,SkillsContainer}from'./SkillStyle';
// import { Icon } from '@mui/material';
function Skill() {
  return (
    <div id='skill'>
      
    <Container>
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          I have been working on for the past 2 years.
        </Desc>
      </Wrapper>
        <SkillsContainer>
          
        {
          skills.map((item)=>{
          return  <Skills>
            <SkillTitle>
              {item.title}
            </SkillTitle>
         
             {
              item.skills.map((items)=>{
                
                return  <SkillList>
                 <SkillImage src={items.image}  disabled/>
               <SkillItem>{items.name}</SkillItem >
               <div disabled>{ items.StarRating? items.StarRating:""}</div>
               </SkillList>
              })
             }   
            </Skills>     
            
               
              })
            }
        </SkillsContainer>
    </Container>
    </div>
  )
}

export default Skill;
