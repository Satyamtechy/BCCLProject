import React,{useState,useContext} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useHistory} from "react-router-dom";
import Navbar from './Navbar'
import {UserContext} from '../App'

const Login=()=>{

    const {state,dispatch} = useContext(UserContext);



    const history=useHistory();
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  
    const loginUser = async (e) => {
      e.preventDefault();
  
      const res = await fetch("/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });
  
      const data = await res.json();
  
      if (res.status === 400 || !data) {
        window.alert("Invalid Login");
        console.log("Invalid Login");
      } else {
        window.alert("Login Successful");
        dispatch({type:"USER",payload:true})
        console.log("valid Login");
        history.push("/headquater");
      }
    };

    return(
    <>
      <Navbar />
        <Grid className="grid">
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form method="post">
                <TextField label='Username' fullWidth required  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Enter Your Email"/>
                <TextField label='Password'  fullWidth required  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  autoComplete="off"
                  placeholder="Enter Your Password"/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button color='primary' variant="contained" style={btnstyle} fullWidth  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  onClick={loginUser}
                  value="Log In">Sign in</Button>
                <Typography > Do you have an account ?
                     <Link href="/signup" >
                        Sign Up 
                </Link>
                </Typography>
                </form>
            </Paper>
        </Grid>
        </>
    )
}

export default Login