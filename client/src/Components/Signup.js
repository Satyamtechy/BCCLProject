import React ,{useState}from 'react'
import { useHistory } from "react-router-dom";
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import './Signup.css'
import Navbar from './Navbar'
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const history = useHistory();
    const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    console.log(e);
    // name = e.target.name;
    // value = e.target.value;
    let { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("valid Registration");
      history.push("/login");
    }
  };


    return (
      <>
      <Navbar />
        <Grid className="grid">
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form method="post" className="form">
                    <TextField fullWidth label='Name' type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Enter Your Name" />
                    <TextField fullWidth label='Email' type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Enter Your Email" />
                    <TextField fullWidth label='Phone Number' type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="Enter Your Phone Number" />
                  <TextField fullWidth label='Work' type="text"
                  name="work"
                  id="work"
                  autoComplete="off"
                  value={user.work}
                  onChange={handleInputs}
                  placeholder="Enter Your Profession" />
                    <TextField fullWidth label='Password'  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Enter Your Password"/>
                    <TextField fullWidth label='Confirm Password'type="password"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Confirm Your Password"/>
                    <Button  variant='contained' color='primary' type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                  onClick={PostData} >Sign up</Button>
                </form>
            </Paper>
        </Grid>
        </>
    )
}

export default Signup;