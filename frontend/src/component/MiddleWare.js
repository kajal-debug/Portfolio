// 2. Create Middleware
import axios from 'axios';

const apiMiddleware = async (url, options,Mail) => {
  
    await axios.post(url, options).then((response)=>{
      console.log("res++",response.data.message)
       Mail(response.data.message)
      return response;
    }).catch ((error)=> {
      Mail(error.message?error.message:error)
      console.error('Error:', error.message?error.message:error);
      // throw error;
      // return error
    })};
// 3. Configure API Routes

export const getMessages = (msg,email,Mail) => {
  return apiMiddleware(`https://portfolio-u2w0.onrender.com/api/mail`,{msg:msg,email:email},Mail);
};
