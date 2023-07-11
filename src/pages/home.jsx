import { Box,styled } from "@mui/material";
import Img from "../assets/images/4298c2d0c66abf890c72a08d8361b842.jpeg";
import { Form } from "../components/form";
import { Info } from "../components/info";
import { getWeather } from "../services/api";
import { useState } from "react";


const Container = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%',
})
const Image = styled(Box)({
    backgroundImage: `url(${Img})`,
    width:'30%',
    height:'80%',
    backgroundSize:'cover',
    borderRadius:'20px 0 0 20px'
    
})

export const Home=()=>{

    const [result,setResult] = useState({});
    return (
        <Container>
        <Image></Image>
        
        <div className="right-box">
            <Form setResult={setResult}/>
            <Info result={result}/>
        </div>
        </Container>
    )
}

// adding a check comment to test if github action is running