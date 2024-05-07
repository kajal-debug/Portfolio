import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Containers,Wrapper,ContactForm,Title,MainFrom,Details,Icon,
  ContactTitle,ContactInputs,ContactInputMessage,ContactButton,ContactDisable} from './ContactStyle';
 import { getMessages } from './MiddleWare';
import { Snackbar } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ClassNames } from '@emotion/react';
import { GlobalConsumer } from './Context';
import Tooltip from '@mui/material/Tooltip'; 
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import CircularProgress from '@mui/material/CircularProgress';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


const Contact = () => {
  const{state}=GlobalConsumer();

//  console.log(state,"mail")
  //hooks
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const[msg,setMsg]=useState('');
  const[snackbarmsg,setsnackbarmsg]=useState('');
  const[IsMsg,setIsMsg]=useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const[disable,setDisable]=useState(false);
  const [tooltip,setTooltip]=useState(false);
  const [tooltipEmail,setTooltipEmail]=useState(false);
  const[Progress,setProgress]=useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setScrollPosition(currentPosition);
        setTooltip(false);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const validateEmailRegex = (email) => {
      if (!email.includes('@')) {
        return 'Email must contain "@"';
      }
      if (!email.includes('.')) {
        return 'Email must contain "."';
      }
      const re = /\S+@\S+\.\S+/;
      if (!re.test(email)) {
        return 'Invalid email format';
      }
      return '';
    };

    const handleClick = (e) => {
      e.preventDefault();
      const emailLink = `mailto:kajalbaisakh123@gmail.com`
      //  const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kajalbaisakh123@gmail.com`;
      window.open(emailLink, '_blank');
    };
    useEffect((delay=2000) => {
      // setOpen(false);
      const errorMessage = validateEmailRegex(email);
     const timeout = setTimeout(async() => {
      console.log('msg',msg,email)
      console.log(errorMessage,"errorMessage")
     await setMsg(email?errorMessage:"");
      // Set isValid based on the presence of error message
      setIsValid(!errorMessage);
              //  setIsValid(validateEmail(value));
              console.log(isValid)
              console.log(isValid ? 'Valid email:' : 'Invalid email:',email,msg);
             },delay);
      return () => clearTimeout(timeout);
    }, [email]);



  const handleEmailChange = (e) => {
    setOpen(false);
    e.preventDefault(); 
    const { value } = e.target;
    setEmail(value); 
  };
  const handleMsgChange =(e)=>{
    setOpen(false);
    e.preventDefault();
    setIsMsg(e.target.value)
    console.log(e.target.value)
  }
  useEffect(() => {
    if (open && scrollPosition > 0) {
      setOpen(false);
    }setTooltip(false)
  }, [scrollPosition]);

  // const form = useRef();
 const Mail =(data)=>{
  if (data) {
    console.log("hiierr",data)
    setDisable(true);
    setProgress(false);
    setOpen(true);
    setsnackbarmsg(data);

  } else {
    console.log("hiierr")
   setOpen(true);
  setsnackbarmsg('something gonna worng');
  }
 }

  const handleSubmit = async(e) => {
   e.preventDefault();
   if (email.trim() === '' || IsMsg.trim() === '') {
    setsnackbarmsg('Please fill in all fields');
    setOpen(true);
  }
  else{
    setProgress(true);
     await getMessages(IsMsg,email,Mail)
    // setEmail(''); 
    // setIsMsg('');
    
  }
}
const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
};
const action = (
  <React.Fragment>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>
);
const handleDisabledButtonClick = (e) => {
  e.preventDefault(); // Prevent the default behavior (scrolling)
}

  return (
    <Containers id='contact'>
      
      <Wrapper>
        <Title>Contact Me</Title>
        <MainFrom>
       <Details>
       <ContactTitle>Get in Touch</ContactTitle>
        <Icon><div><PermPhoneMsgIcon/></div>+91-7008478853</Icon>
        <Icon><div><LocationCityIcon/></div>Pune</Icon>
        <Tooltip  open={tooltipEmail}  title="Alternative Mail ID" arrow>
        <Icon> 
          <div><AlternateEmailIcon /></div>
          <span onMouseEnter={()=>setTooltipEmail(true)}
       onTouchStart={()=>setTooltipEmail(true)} onTouchEnd ={()=>setTooltipEmail(false)}
       onMouseLeave={()=>setTooltipEmail(false)}>kajalbaisakh123@gmail.com</span> </Icon></Tooltip>
       </Details>
        {/* <Desc>Feel free to reach out to me for any questions or opportunities!</Desc> */}
        <ContactForm  >
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInputs placeholder="Your Email*" type='text' value={email} name="from_name" onChange={handleEmailChange} onClick={handleEmailChange} required/>
          <p>{msg && email !== '' ?`${msg}`:" "}</p>
          <ContactInputMessage placeholder="Message*" value={IsMsg} rows="4" name="message"onChange={handleMsgChange} onClick={handleMsgChange} required />
       {disable?
     <Tooltip  open={tooltip}  title="Please refresh the page to resend the email!" arrow>
        <div>
        <ContactDisable type="submit" value="Send"
         onMouseEnter={()=>setTooltip(true)}
         onTouchStart={()=>setTooltip(true)} onTouchEnd ={()=>setTooltip(false)}
         onMouseLeave={()=>setTooltip(false)} onClick={handleDisabledButtonClick}/>
          </div></Tooltip>   
       :
      <>{Progress?
      <div className='Progresscircle'>
      <CircularProgress />
      </div>
      :<ContactButton type="submit" value="Send"  onClick={handleSubmit} />}
       </> }
          <Snackbar
           sx={{ height: "58%" }}
       anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message={snackbarmsg}
          severity="success"
           action={action}
        />
        </ContactForm>
        </MainFrom>
      </Wrapper>
    </Containers>

  )
}
export default Contact;