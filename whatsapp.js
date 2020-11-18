const accountSid = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; 
const authToken = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; 

module.exports.sendMessageOnWhatsapp=function(){
  const client = require('twilio')(accountSid, authToken); 
  client.messages 
      .create({ 
         body: 'Your Basmati rice order of 1Kg has shipped and should be delivered on July 10, 2019. Details: https://shop.frendy.in/', 
         mediaUrl:"https://aniketcodes.s3.ap-south-1.amazonaws.com/download.png",
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+918936872110' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
}
 
