import React ,{useState,useEffect}from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import './AdminStoreForm.css'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'
const SystemStore = () => { 


  const history=useHistory();
 


useEffect(() => {
  const callInputPage=async()=>{
    try {
        const res = await fetch('/inputAdmin',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });

        const data= await res.json();
        if(!res.status===200 || !data){
            const error = new Error(res.error);
            throw error;
        }

    } catch (error) {
        console.log({message:"not logged in"});
        history.push('/login');
    }
}
  callInputPage();
}, [history])






    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }


    const [input, setInput] = useState({
        StoreName:"System Store",
        SerialNumber:"",
        MaterialNumber:"",
        MaterialDesc:"",
        OpeningBalance:"",
        RecievedQuantity:"",
        IssueQuantity:"",
        BalanceQuantity:"",
        Date:"",
    });
    const handleInputForm = (e) => {
        console.log(e);
        let { name, value } = e.target;
    
        setInput({ ...input, [name]: value });
    };
    const PostInput = async (e) => {
        e.preventDefault();
    
        const {StoreName,SerialNumber,MaterialNumber,MaterialDesc,OpeningBalance,RecievedQuantity,IssueQuantity,BalanceQuantity,Day_and_Date } = input;
    
        const res = await fetch("/userinput", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            StoreName,
            SerialNumber,
            MaterialNumber,
            MaterialDesc,
            OpeningBalance,
            RecievedQuantity,
            IssueQuantity,
            BalanceQuantity,
            Day_and_Date,
          }),
        });
    
        const data = await res.json();
    
        if (res.status === 422 || !data) {
          window.alert("Plzz fill the details");
          console.log("Invalid Input");
        } else {
          window.alert("Input Successful");
          console.log("Input Successful");
        }
      };
    return (
      <>
      <Navbar />
      <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Enter Details</h2>
                    <Typography variant='caption' gutterBottom>Please fill this details form !</Typography>
                </Grid>
                <form method="post" className="form">
                    <TextField fullWidth label='StoreName' type="text" disabled
                    name="StoreName"
                    id="StoreName"
                    autoComplete="off"
                    value={input.StoreName}
                    onChange={handleInputForm}
                    placeholder="Enter Store" />
                    <TextField fullWidth label='Serial Number' type="number"
                    name="SerialNumber"
                    id="SerialNumber"
                    autoComplete="off"
                    value={input.SerialNumber}
                    onChange={handleInputForm}
                    placeholder="Enter Serial Number" />
                    <TextField fullWidth label='Material Number'  type="number"
                    name="MaterialNumber"
                    id="MaterialNumber"
                    value={input.MaterialNumber}
                    onChange={handleInputForm}
                    autoComplete="off"
                    placeholder="Enter MaterialNumber" />
                    <TextField fullWidth label='Material Description' multiline rows={5} rowsMax={30}
                    type="text"                
                    name="MaterialDesc"
                    id="MaterialDesc"
                    value={input.MaterialDesc}
                    onChange={handleInputForm}
                    autoComplete="off"
                    placeholder="Enter MaterialDesc" />
                    <TextField fullWidth label='Opening Balance'  type="number"
                    name="OpeningBalance"
                    id="OpeningBalance"
                    value={input.OpeningBalance}
                    onChange={handleInputForm}
                    autoComplete="off"
                    placeholder="Enter OpeningBalance"/>
                    <TextField fullWidth label='Recieved Quantity'type="number"
                    name="RecievedQuantity"
                    id="RecievedQuantity"
                    value={input.RecievedQuantity}
                    onChange={handleInputForm}
                    autoComplete="off"
                    placeholder="Enter RecievedQuantity"/>
                  <TextField fullWidth label='Issue Quantity' type="number"
                    name="IssueQuantity"
                    id="IssueQuantity"
                    value={input.IssueQuantity}
                    onChange={handleInputForm}
                    autoComplete="off"
                    placeholder="Enter IssueQuantity"/>
                  <TextField fullWidth label='Balance Quantity' type="number"
                    name="BalanceQuantity"
                    id="BalanceQuantity"
                    value={input.BalanceQuantity}
                    onChange={handleInputForm}
                    autoComplete="off"
                    placeholder="Enter BalanceQuantity"/>
                  <TextField fullWidth  type="Date"
                    name="Day_and_Date"
                    id="Day_and_Date"
                    value={input.Day_and_Date}
                    onChange={handleInputForm}
                    autoComplete="off"/>
                    <Button variant='contained' color='primary' type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    onClick={PostInput}
                    >Feed Details</Button>
                    <Button className="btn" variant='contained' color='primary' 
                    href="/display"
                    >Details</Button>
                </form>
            </Paper>
        </Grid>
      </>
    )
}

export default SystemStore
