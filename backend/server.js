const express =require('express');
const app =express();
const cors = require('cors');
const bodyparser = require('body-parser');
var nodemailer = require('nodemailer');
app.use(cors());
app.use(express.json());



 

var transport = nodemailer.createTransport({
    service: "gmail",
    
    auth: {
      user: "framersfreind@gmail.com",
      pass: "hdifayunzgsowxfl"
    }
  });

 

app.post('/sendmail',(req,res)=>{
    const Email= req.query.email;
    const Phnum=req.query.phnum;
    const Selectoption=req.query.option;
    var mailOptions = {
        from: 'framersfreind@gmail.com',
        to: Email,
        subject: 'FarmarsFriends',
        text:'Dear  '+Selectoption+' .We are welcome to Farmers Freind.   '+Email+'   you sucessfully register please check your data. '+Phnum+'  You will receive latest notification about agriculture. Our services are News updates and our Best & Fresh Products.'
      };
      console.log(mailOptions,"mailOptions")
      
      transport.sendMail(mailOptions, (error, info)=>{
        if (error) {
          console.log(error);
        } else {
          res.send(info.response);
        }
      });
      console.log("hiii =  ",Email);
})

app.get('/',(req,res)=>{
    res.send("sample")
})


app.listen(5000,(req,res)=>{
    console.log("server is running");
})