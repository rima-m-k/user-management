const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : false}))

const dbconnect = require("./config/dbconnect");
dbconnect.dbconnect();

const user = require("./routes/user");
const admin = require("./routes/admin")
app.use("/", user);
app.use("/admin", admin);

app.use(express.static("public"));
  
app.listen(PORT, (error) =>{
	if(!error)
		console.log("listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);

module.exports =app;