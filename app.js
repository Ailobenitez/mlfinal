const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")
))



app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});


app.listen(process.env.PORT||3000, function(){
  console.log('servidor corriendo en puerto 3000')
})