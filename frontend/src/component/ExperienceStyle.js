import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;
export const Document = styled.img`
    height: 70px;
    //  width: fit-content;
    width:100%;
     object-fit: cover;
    background-color: #000;
    border-radius: 10px;
    display: inline-block;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
      
`
export const TextContainer = styled.div`
    position: absolute;
    bottom:0px;
    height: 79px;
    border-radius: 10px;
    width: fit-content;
    left: 0;
    //  transform: translateX(-50%);
    right:0;
    background-color: rgba(0, 0, 0, 0.5);
     padding: 12px;
     text-align:center;
     display:flex;
 align-items: center;
 justify-content: center;
    visibility: hidden; 
    opacity: 1; 
    transition: opacity 0.3s ease; 
  `
  export const Maindocment = styled.div`
  display:none;
  gap:20px;
  `
export const Documents = styled.div`
display:flex;
gap: 20px;
 position:relative;
  display:inline-block; 
&:hover ${TextContainer} {
    visibility: visible;
    opacity: 1;
  }
  &:hover ${Document} {
   height:80px;
   display: inline-block;
   @media not all and (min-resolution:.001dpcm) {
    @media {
        .safari_only {
            width: 20%;
        }
    }
}
  }
  .text{
    color:white;
    font-size:10px;
    text-align:center;
  }
@media only screen and (max-width: 768px){
    display:block;
`
export const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
`

export const Span = styled.span`
 overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`
export const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 270px;
    }

    &:hover ${Maindocment}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

export const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

export const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


export const Role = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

export const Company = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

export const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


export const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

export const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

export const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

