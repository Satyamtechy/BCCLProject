const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('../middleware/authenticate')
require("../db/connection");
const User = require("../model/userSchema");
const Input=require("../model/inputSchema");
const authenticate = require("../middleware/authenticate");

router.get("/", (req, res) => {
  res.send("Hello world");
});

// Registration

// Using Promises
// router.post("/register",(req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "Please fill the field properly" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already exists" });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered succesfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "Failed to register" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   //   if ((!name || !email || !phone, !work || !password || !cpassword)) {
//   //     console.log("error");
//   //   }
//   //   console.log(name, email, phone, work, password, cpassword);
//   //   console.log(req.body.name);
//   //   console.log(req.body.email);
//   //   res.send("Registration page");
//   //   res.json({ message: req.body });
// });



// Using async/await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Email already exists" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      // use middleware for hashing password

      await user.save();
    }

    // const userRegister = await user.save();

    // console.log(${user} user registered successfully);
    // console.log(userRegister);

    res.status(201).json({ message: "user registered succesfully" });
  } catch (err) {
    console.log(err);
  }
  //   if ((!name || !email || !phone, !work || !password || !cpassword)) {
  //     console.log("error");
  //   }
  //   console.log(name, email, phone, work, password, cpassword);
  //   console.log(req.body.name);
  //   console.log(req.body.email);
  //   res.send("Registration page");
  //   res.json({ message: req.body });
});

// login route

router.post("/signin", async (req, res) => {
  //   console.log(req.body);
  //   res.json({ message: "signedin" });
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill both fields" });
    }

    const userLogin = await User.findOne({ email:email });
    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Crendetials" });
      } else {
        res.json({ message: "Signin successful" });
      }
    } else {
      res.status(400).json({ error: "Invalid Crendetials" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/headquater",authenticate,(req, res) => {
  res.send(req.rootUser);
});

router.get("/inputAdmin",authenticate,(req, res) => {
  Input.find(req.body).then(data=>{
    res.json(data);
  });
});
router.get("/system",authenticate,(req, res) => {
  Input.find(req.body).then(data=>{
    res.json(data);
  });
});
router.get("/material",authenticate,(req, res) => {
  Input.find(req.body).then(data=>{
    res.json(data);
  });
});

router.get("/display",authenticate,(req, res) => {
  Input.find(req.body).then(data=>{
    res.json(data);
  });
});
router.get("/logout",authenticate,async(req, res) => {
  req.rootUser.tokens=req.rootUser.tokens.filter((currElem)=>{
    return currElem.token!==req.token
  })
  await req.rootUser.save();
  res.clearCookie('jwtoken',{path:'/'});
  res.status(200).send("User Logged Out")
});








module.exports = router;