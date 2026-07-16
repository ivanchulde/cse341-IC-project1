const express=require("express");
const cors=require("cors");
const {initDB}=require("./db/connect");
const contacts=require("./routes/contacts");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");


const app=express();


app.use(cors());

app.use(express.json());


app.use("/contacts",contacts);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/",(req,res)=>{

res.send("Hello World");

});


initDB()
.then(()=>{

app.listen(8080,()=>{

console.log("Server running");

});

});