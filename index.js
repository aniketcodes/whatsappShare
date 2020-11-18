const express=require("express");
const PORT=8000;
const app=express();        
const sendMessage=require("./whatsapp");

app.get("/sendMessage",sendMessage.sendMessageOnWhatsapp);



app.listen(PORT,function(err){
    if(err){
        return console.log(`error in serving at ${PORT}`);
    }
    else{
        console.log(`Serving at ${PORT}`);
    }
})