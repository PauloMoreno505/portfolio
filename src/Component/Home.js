import { Container, Box, Grid, Typography, createMuiTheme, makeStyles, ThemeProvider, withStyles, Button} from "@material-ui/core";
import React from 'react'
import Typical from 'react-typical'
import Navbar from "./Navbar";
import Me from '../image/Me.png'
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import JohnPauloMoreno_CV from '../file/John Paulo Moreno CV.pdf'

const theme = createMuiTheme({
    typography:{
        fontFamily:'poppins'
    },
    overrides:{
        MuiLink:{
            root:{
                fontFamily:'poppins'
            },
        },
        MuiTypography:{
            root:{
                fontFamily:'poppins'
            }
        },
    }

});

const useStyles = makeStyles ((theme) =>({
    hello:{
        color:'#4A4A4A',
        fontSize:'20px',
    },
    im:{
        color:'#4A4A4A',
        fontSize:'50px'
    },
    name:{
        color:'#63C0FF',
        fontSize:'50px'
    },
    position:{
        color:'#63C0FF',
        fontSize:'20px',
        marginTop:'-28px'
    }
}));
const CvButon = withStyles(() => ({
    root:{
        color:'#FFFFFF',
        backgroundColor:'#63C0FF',
        height:'50px',
        width:'170px',
        borderRadius:'5px',
        marginTop:'30px',
        '&:hover':{
            border:'1px solid #63C0FF',
            backgroundColor:'#F6FCFF',
            color:'#63C0FF',
        }
    }
}))(Button)

const Home = () => {
    const styles =useStyles()
    return(
        <>  
        <Navbar/>
            <ThemeProvider theme={theme} id="home">
                <Box style={{backgroundColor:'#F6FCFF'}}>
                    <Container style={{height:'95vh',display: 'flex'}}>
                        <Grid container alignContent="center">
                            <Grid item lg={7} style={{paddingTop:'350px'}}>
                                <Typography className={styles.hello} >Hello</Typography>
                                <Typography className={styles.im} >I'm<span className={styles.name}> JOHN PAULO MORENO</span></Typography>
                                <p className={styles.position} >
                                    <Typical
                                        steps={['UI/UX Designer', 2000, 'Frontend Developer',1000]}
                                        loop={Infinity}
                                        wrapper="p"
                                    />
                                </p>
                                <CvButon href={JohnPauloMoreno_CV} download="JohnPauloMoreno_CV" target='_blank'>Donload CV</CvButon>
                            </Grid>
                            <Grid item lg={5} style={{paddingTop:'155px'}}>
                                <img src={Me} alt={Me} style={{height:'734px', width:'550px'}}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </ThemeProvider>
            <Portfolio/>
            <ContactMe/>
            <Footer/>
        </>
    )
}
export default Home;