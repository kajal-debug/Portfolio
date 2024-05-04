import styled from 'styled-components';
 export const Containers = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
// position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}

`

export const Wrapper = styled.div`
position: relative;
// display: flex;
// justify-content: space-between;
// align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
    padding: 100px 20px;
}

`

export const Title = styled.div`
font-size: 42px;
// text-align: center;
font-weight: 600;
margin-top: 20px;
margin-left: 23px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
      text-align: center;
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

export const MainFrom = styled.div`
display: flex;
justify-content:flex-start;
width: 100%;
@media (max-width: 768px) {
  display:block;
  width: 100%;
}
`
export const Details = styled.div`
width: 55%;
  max-width:600px;
  // background-color: ${({ theme }) => theme.card};
  margin-top: 28px;
  padding: 32px;
  border-radius: 16px;
  // box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  height:220px;
  display: flex;
  flex-direction: column;
  gap:25px;
  color:${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    display:block;
    width: 100%;
  }
`
export const Icon = styled.div`
display: flex;
    gap: 20px;
    text-align: center;
    @media (max-width: 768px) {
      gap: 2px;
    }
`
export const ContactForm = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  .Progresscircle{
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
   background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    padding: 7px 8px;
    margin-top: 2px;
    border-radius: 12px;
    border: none;
    cursor:pointer;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
     }
  }
`

export const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600; 
  color: ${({ theme }) => theme.text_primary};
`


export const ContactInputs = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid gray;
  outline: none;
  font-size: 18px;
  color: gray;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid blue;
  }
`;

export const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

export const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
 background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  cursor:pointer;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`

export const ContactDisable = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background:#ddd3d3;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  cursor:not-allowed;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`