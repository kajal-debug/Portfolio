const express = require("express");
const app = express();
// const serverless = require('serverless-http');
const nodemailer = require('nodemailer');
const router = express.Router();
const server = require('http')
const http = server.createServer(app);
const cors = require("cors");
const path = require("path");
app.use(cors());

app.use(express.json());
const port =  3000;
 app.use(express.static(path.join(__dirname, '../frontend/build')));
// console.log(express.static(path.join(__dirname, './frontend/build')))

// app.use('/.netlify/function/api',router);
// module.exports.handler = serverless(app);
// // Define your API routes
// app.use('/', (req, res) => {
//   // Your API logic here
//   res.json({ message: 'API data response' });
// });

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/build', 'index.html'));
});

router.post('/mail',(request,response)=>{
    const{msg,email}=request.body
    console.log("msg",msg,email)
if (msg !== '') {
    var transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        //  port: 587,
        //  secure: false, // true for 465, false for other ports
        host: 'smtp.gmail.com',
        // port: 465,
        port: 587,
        //secure: true,
        // service:"gmail",
        auth: {
            user: 'kajalbaisakh7@gmail.com', // generated ethereal user
            pass: "flhc cpwn rwsi iypt"
        },
    });
    var mailOption = {
        from: email,
        to: 'kajailbaisakh7@gmail.com',
        subject: "Recive Mail from your Porfolio",
        text: "Dear " +email + ",\nThank you for your reaching out.",
        html: `<p style="color:black,font-weight:bold">
        Dear " +${email} + ",\nThank you for your reaching out.,<br/>
        MESSAGE:${msg}</p>`
    }
    transporter.sendMail(mailOption, function (err, info) {
        if (err) {
            console.log("err for:", err);
         return response.status(400).json({message:err})

        } else {
            console.log("email has been send", info.response);
         
           
              return  response.status(200).json({message:"email has been send",info:info})
          
        }
    })

    response.status(200,{msg:"Congrastulation!Successfully send msg"})
}
  else{
response.status(400,{msg:"Please fill the msg"})
}
})
app.use('/api', router);
app.listen(port, () => {
  console.log(`Express Server is started at PORT : ${port}`);
});
