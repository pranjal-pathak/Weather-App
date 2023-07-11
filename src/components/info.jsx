 import { Box,Typography,styled} from "@mui/material";
 import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud, CenterFocusStrong } from '@mui/icons-material'
 

 const Row = styled(Typography)({
    padding: '10px',
    fontSize: '2vw', 
    '& > svg': {
        marginRight: 10
    }  
 });

 

 

 export const Info = (props)=>{
    return(
        props.result && Object.keys(props.result).length>0 ?  
        <Box className="box" style={{margin: '3vw 10vw'}}>

            <Row style={{fontFamily:'garamond'}}><LocationOn />Location:{props.result.name},{props.result.sys.country}</Row>
            <Row style={{fontFamily:'garamond'}}> <SettingsBrightness/>Temprature:{props.result.main.temp}</Row>

            <Row style={{fontFamily:'garamond'}}><Opacity />Humidity:{props.result.main.humidity}</Row>

            <Row style={{fontFamily:'garamond'}}><Brightness5 />Sunrise:{new Date(props.result.sys.sunrise*1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</Row>

            <Row style={{fontFamily:'garamond'}}><Brightness6 />Sunset:{new Date(props.result.sys.sunset*1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</Row>

            <Row style={{fontFamily:'garamond'}}><Cloud />Clouds:{props.result.clouds.all}%</Row>

        </Box>
        : null
    )
}

