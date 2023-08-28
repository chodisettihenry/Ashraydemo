const express =require('express');
const app =express();
const cors = require('cors');
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
 



 

var transport = nodemailer.createTransport({
    service: "gmail",
    
    auth: {
      user: "ashrayladieshostel@gmail.com",
      pass: "rjltvyalmsfnweoo"
    }
  });

 

app.post('/sendmail',(req,res)=>{
  let {username,bookedfor,mobile_number} = req.body;
  console.log(req.body)
    var mailOptions = {
        from: 'ashrayladieshostel@gmail.com',
        to: "ashrayladieshostel@gmail.com",
        subject: 'New Booking',
        html:"<h4 style='font-family:Geneva, Verdana, sans-serif; color:#191970; font-size:19px;'>New Booking Information..<br>We have to contact them to give information.. To Book a room. </h4><br><p style='font-family:Geneva, Verdana, sans-serif; font-size:15px;'><strong style='font-family:Geneva, Verdana, sans-serif;font-size:16px; font-weight:bold;'>Dear Management,</strong><br><br>Name: "+username+"<br>Contact Number: "+mobile_number+"<br>I want "+bookedfor+" Room. <br><br>So, please call me or text me.<br>I am "+username+". This is my number "+mobile_number+". I would like a quiet room with a pool view, if possible.<br><br></p><p style='font-family:Geneva, Verdana, sans-serif; font-size:15px;'>Thank you.</p>"  
      };
      console.log(mailOptions,"mailOptions")
      
      transport.sendMail(mailOptions, (error, info)=>{
        if (error) {
          console.log(error);
        } else {
          res.send(info.response);
        }
      });
 
})

app.get('/',(req,res)=>{
    res.send("sample")
})
app.post('/test',(req,res)=>{
  console.log(req.body)
  res.send(req.data)
})


app.listen(process.env.PORT || 5000,(req,res)=>{
    console.log("server is a running");
})