import React,{useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Button from '@material-ui/core/Button';
import './HeadQuater.css'
import { NavLink,useHistory } from 'react-router-dom';
const HeadQuater = () => {
    const history=useHistory();
    

    useEffect(() => {
        const callHeadQuaterPage=async()=>{
            try {
                const res = await fetch('/headquater',{
                    method:"GET",
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json"
                    },
                    credentials:"include"
                });
    
                const data= await res.json();
                if(!res.status===200||!data){
                    const error = new Error(res.error);
                    throw error;
                }
    
            } catch (error) {
                console.log(error);
                history.push('/login')
            }
        }
        callHeadQuaterPage();
    }, [history])
    
    
    return (
        <>  
        <Navbar/>
            <div className="headquater">
                <h2>BCCL</h2>
                <h3>HEADQUATER</h3>
                <NavLink to="/inputadmin" style={{ textDecoration: 'none' }}><Button className="admin" color='primary' variant="contained" style={{padding:'40px 40px 40px 40px',marginLeft:'250px',marginBottom:'300px',outline:'none'}}><span>Admin Store</span></Button></NavLink>
                <NavLink to="/system" style={{ textDecoration: 'none' }}><Button className="admin" color='primary' variant="contained" style={{padding:'40px 40px 40px 40px',marginLeft:'250px',marginBottom:'300px',outline:'none'}}><span>System Store</span></Button></NavLink>
                <NavLink to="/material" style={{ textDecoration: 'none' }}><Button className="admin" color='primary' variant="contained" style={{padding:'40px 40px 40px 40px',marginLeft:'250px',marginBottom:'300px',outline:'none'}}><span> Material Master</span></Button></NavLink>
            </div> 
            <Footer/>
        </>
    )
}

export default HeadQuater
