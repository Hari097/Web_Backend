let express = require("express")

let app = express()



let initializeServer = ()=>{ 
    try{
        app.listen(3005,()=>{ 
            console.log("Server Running at http://localhost:")
        })
    }
    catch(error){
        console.log(`Server Error: ${e.message}`);
        process.exit(1);
    }
  
} 

initializeServer() 

app.get("/login",(request,response)=>{
 
response.send("hello world..!")


})





