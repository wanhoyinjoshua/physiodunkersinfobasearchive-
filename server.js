const express =require('express')
const app = express();
const port = process.env.PORT||4000;
const bodyparser = require('body-parser');
const Schema = require('./models/product.js')

app.use(bodyparser.json())



app.listen(port,()=>{console.log("logg")})

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://joshua:verticalfifty@cluster0-oxepz.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useNewUrlParser: true} )
.then(res=>console.log("loggedin"))
.catch(err=>console.log(err))
console.log(Schema)





app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/api/backpainmyth", (req,res)=>{
    const fetchdata =Schema.findById( { _id: "5ef7dc5a3ec5efbc2e1f0179" })
    .then(ll=>res.json(ll.comment))
})
app.post("/api/backpainmyth", (req,res)=>{
    const updatecomment =  Schema.findByIdAndUpdate(
        { _id: "5ef7dc5a3ec5efbc2e1f0179" },
        { "$push": { comment: `${req.body.comment}` } },
        {new: true},
        function(err, result) {
          if (err) {
            res.json(err);
          } else {
              
            res.send(result);
          }
        }
      );
})

app.get("/api/gait", (req,res)=>{

  
    res.json(
    [
        {blogpost: 'gait',likes:"50",comment:[]}
        
    ]) 
})

 


