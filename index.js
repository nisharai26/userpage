const mongoose = require("mongoose");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const express = require("express");
const { nanoid } = require("nanoid");
const userRouter = require("./routes/userRouter");

mongoose.connect( "mongodb+srv://nisha:passwordabc123@cluster0.kstue.mongodb.net/userLoginDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true,
     useUnifiedTopology: true
     }
);
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.engine("hbs", hbs
({ extname: "hbs"
 }));
app.set("view engine", "hbs");
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:"mongodb+srv://nisha:passwordabc123@cluster0.kstue.mongodb.net/userLoginDatabase?retryWrites=true&w=majority",
    }),
    secret: "keyboardcat",
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: false, 
      maxAge: 1000 * 60 * 60 * 2, 
      sameSite: true 
    },
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',userRouter);
app.listen(3000,()=>{
  console.log("http://localhost:3000");
})
