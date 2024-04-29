import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Containers,Wrapper,ContactForm,Title,
  ContactTitle,ContactInputs,ContactInputMessage,ContactButton} from './ContactStyle';
 import { getMessages } from './MiddleWare';
import { Snackbar } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { GlobalConsumer } from './Context';




const Contact = () => {
//  const{state}=GlobalConsumer();

//  console.log(state,"mail")
  //hooks
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const[msg,setMsg]=useState('');
  const[snackbarmsg,setsnackbarmsg]=useState('');
  const[IsMsg,setIsMsg]=useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [state, setState] = useState({
    Mail: (response) => console.log(response), // Example function, replace with your implementation
  });


    useEffect(() => {
      const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setScrollPosition(currentPosition);
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
    }
  }, [scrollPosition]);

  // const form = useRef();
 const Mail =(data)=>{
  if (data) {
    console.log("hiierr",data)
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
     await getMessages(IsMsg,email,Mail)
    
    // setEmail(''); 
    // setIsMsg('');
    
  }
}

  


  return (
    <Containers id='contact'>
      
      <Wrapper>
        <Title>Contact</Title>
       
        {/* <Desc>Feel free to reach out to me for any questions or opportunities!</Desc> */}
        <ContactForm  >
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInputs placeholder="Your Email" type='text' value={email} name="from_name" onChange={handleEmailChange} onClick={handleEmailChange} required/>
          <p>{msg && email !== '' ?`${msg}`:" "}</p>
          <ContactInputMessage placeholder="Message" value={IsMsg} rows="4" name="message"onChange={handleMsgChange} onClick={handleMsgChange} required />
          <ContactButton type="submit" value="Send"  onClick={handleSubmit}/>
          <Snackbar
       anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open}
          autoHideDuration={3000}
          onClose={()=>setOpen(false)}
          message={snackbarmsg}
          severity="success"
        />
        </ContactForm>
      </Wrapper>
    </Containers>

  )
}
export default Contact;