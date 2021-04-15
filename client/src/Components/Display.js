import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import Navbar from './Navbar'
import './Display.css'

const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: '100vw',
      backgroundColor:theme.palette.grey[300],
      paddingTop:theme.spacing(3),
      marginBottom:'20px'
    }
  }));


const Display = () => {

  

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



    
    const [displays,setDisplays]=useState([]);
    const getData=async()=>{
        try {
            const data= await fetch("/display")
            if(data.ok){
                const result=await data.json();
                setDisplays(result)
                console.log(result);
            }
        } catch (error) {
            console.log(error)
        }
    }
  const history=useHistory();
    
  useEffect(() => {
    
  const callDisplayPage=async()=>{
    try {
        const res = await fetch('/display',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });

        const data= await res.json();
        if(!res.status===200 ||!data){
            const error = new Error(res.error);
            throw error;
        }

    } catch (error) {
        console.log({message:"not logged in"});
        history.push('/login');
    }
}

getData();
callDisplayPage();

    }, [history])

    return (
        <>
        <Navbar />
<Paper className={classes.root}>
      <TableContainer className={classes.container} component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead> 
            <TableRow>
                <TableCell>Store Name</TableCell>
                <TableCell>Serial Number</TableCell>
                <TableCell>Material Number</TableCell>
                <TableCell>Material Desc</TableCell>
                <TableCell>Opening Balance</TableCell>
                <TableCell>Recieved Quantity</TableCell>
                <TableCell>Issue Quantity</TableCell>
                <TableCell>BalanceQuantity</TableCell>
                <TableCell>Day & Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {displays.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <TableRow>
                <TableCell>
                  {item.StoreName}
                </TableCell>
                <TableCell>
                  {item.SerialNumber}
                </TableCell>
                <TableCell>
                  {item.MaterialNumber}
                </TableCell>
                <TableCell>
                  {item.MaterialDesc}
                </TableCell>
                <TableCell>
                  {item.OpeningBalance}
                </TableCell>
                <TableCell>
                  {item.RecievedQuantity}
                </TableCell>
                <TableCell>
                  {item.RecievedQuantity}
                </TableCell>
                <TableCell>
                  {item.RecievedQuantity}
                </TableCell>
                <TableCell>
                  {item.Day_and_Date}
                </TableCell>
            </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        //component="div"
        count={displays.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    <Button className="btn" id="btn" variant='contained' color='primary' href="/inputAdmin">Feed Details</Button>
        </>
    )
}

export default Display
