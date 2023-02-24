const express = require("express");
const app = express();
const DB = "fishing";
const PORT = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json(),express.urlencoded({extended:true}));

require("./config/mongoose")(DB)

require("./routes/routes")(app)

app.listen(PORT,()=>{console.log(`server up on ${PORT}`)})


