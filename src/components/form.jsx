import styled from "@emotion/styled";
import { Box,InputBase,Button} from "@mui/material";
import { useState } from "react";
import { getWeather } from "../services/api";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



const Container = styled(Box)({
    //  background:'##f9f9f9ba',
    border:'black',
    display:'flex',
    justifyContent: 'space-around',
    alignItems:'center'

})
const Input = styled(InputBase)({
    type:"search",
    border:'slategray',
   
    margin:2,
    color:'black',
    
})

const Search = styled(Box)({
    display:'flex',
    alignItems:'center',
})

export const Form = (props)=>{
    // const [data,setData] = useState({city:''});
    const [input,setInput] = useState("");
  

    const handleChange =(e)=>{
        // setData({...data,[e.target.name]:e.target.value})
        setInput(e.target.value);
        
    }
    

    const getWeatherInfo= async ()=>{
        try{
        if(input==='')
        {
        alert(`Input field empty, please enter the city name and then click on Get Weather`);
        return;
        }
        
        let response = await getWeather(input);
        setInput("");
        props.setResult(response);
    }
    catch(err){
        alert(err.message);
    }                
    }
    return(
        <Container>
            <Search><SearchOutlinedIcon fontSize="large" color="disabled"/><Input style={{fontSize:'1.75vw',fontFamily:'monospace',marginLeft:'10px',padding:'10px 10px 10px 10px'}} name="city" value={input} placeholder=" Search for a city" color="black" onChange={(e) =>handleChange(e) } /></Search>
            
            <Button style={{fontSize:'1.5vw' , fontFamily:'monospace' , borderRadius:"10px"}} variant ="outlined" color ="success"  onClick={()=> getWeatherInfo() }>
                Get Weather
            </Button>
        </Container>
    )
}

// div => Box
// input => textfield or inputBase
