import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
// import _default from '../../themes/default';

export const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  .logoimg{
    width:40px;
    height: 40px;
    max-height: 50px;
    
    border-radius:50px;
    // @media screen and (max-width: 768px) { 
    //   width:50px;
    //   }
  }
`;

// export const NavLogo = styled(LinkR)`
//     width: 80%;    
//     padding: 0 6px;
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     @media (max-width: 640px) {
//       padding: 0 0px;
//   }
// `;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
    .NavLink{
      color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer; 
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
    }
`;

// export const NavLink = styled.a`
//     color: ${({ theme }) => theme.text_primary};
//     font-weight: 500;
//     cursor: pointer; 
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
//     &:hover {
//       color: ${({ theme }) => theme.primary};
//     }

//     &.active {
//       border-bottom: 2px solid ${({ theme }) => theme.primary};
//     }
// `;


export const GithubButton = styled(LinkR)`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  margin:20%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 75px;
    transform: translate(-100%, 30%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.MobileMenu_Light};
    transition: all 0.6s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px  rgba(0, 0, 0, 0.2);
    opacity: ${({ open }) => (open ? '1' : '0')};
    z-index: ${({ open }) => (open ? '1' : '-1')};
.mobileMenuLink{
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
}
`

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

// export  const MobileLink = styled.a`
//   color: ${({ theme }) => theme.text_primary};
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }

//   &.active {
//     border-bottom: 2px solid ${({ theme }) => theme.primary};
//   }
// `;

// export const MobileNavLogo = styled(LinkR)`
//   width: 80%;
//   padding: 0 6px;
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   text-decoration: none;
//   @media (max-width: 640px) {
//     padding: 0 0px;
//   }
// `;