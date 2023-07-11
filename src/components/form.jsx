import styled from "@emotion/styled";
import { Box,InputBase,Button} from "@mui/material";
import { useState } from "react";
import { getWeather } from "../services/api";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Container = styled(Box)({
    //  background:'##f9f9f9ba',
    padding:'10px',
    display:'flex',
    justifyContent: 'space-around'

})
const Input = styled(InputBase)({
    type:"search",
    marginRight:'20px',
    fontSize: 18,
      
})

export const Form = (props)=>{
    const [data,setData] = useState({city:''});

    const handleChange =(e)=>{
      
        setData({...data,[e.target.name]:e.target.value})
    }

    const getWeatherInfo= async ()=>{
       
        let response = await getWeather(data.city);
        props.setResult(response);
       
           
    }
    return( 
        <Container>
            <div className="search"><SearchOutlinedIcon fontSize="large" color="disabled"/><Input style={{fontSize:'1.5vw',fontFamily:'monospace',marginLeft:'10px'}} name="city"  placeholder=" Search for a city" color="black" onChange={(e) =>handleChange(e) } /></div>
            
            <Button style={{fontSize:'medium' , fontFamily:'monospace' , borderRadius:"10px"}} variant ="outlined" color ="success"  onClick={()=> getWeatherInfo() }>
                Get Weather
            </Button>
        </Container>
    )
}

// div => Box
// input => textfield or inputBase
