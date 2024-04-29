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
  return apiMiddleware(`http://127.0.0.1:3000/api/mail`,{msg:msg,email:email},Mail);
};
