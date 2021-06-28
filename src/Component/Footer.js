import { Container, createMuiTheme, makeStyles, Box, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import twitter from '../svg/twitter.svg'
import facebook from '../svg/facebook.svg'
import instagram from '../svg/instagram.svg'
import linkedin from '../svg/linkedin.svg'


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
const useStyles = makeStyles(() => ({
    title:{
        fontSize:'30px',
        fontWeight:'600',
        color:'#4A4A4A',
        marginTop:'62px'
    },
    description1:{
        fontSize:'15px',
        fontWeight:'200',
        color:'#8A8FA3',
        marginTop:'50px',
    },
    description2:{
        fontSize:'15px',
        fontWeight:'200',
        color:'#8A8FA3',
        marginTop:'38px',
    },
    description3:{
        marginTop:'20px',
        fontSize:'15px',
        fontWeight:'200',
        color:'#8A8FA3',
    },
    hrfooter:{
        border:'1px solid #AFCDDC',
        marginTop:'40px'
    }
}))

const Footer = () => {
    const styles = useStyles();
    return(
        <>
            <ThemeProvider theme={theme}>
                <Box bgcolor="#F6FCFF" height="420px">
                    <Box display="flex" justifyContent="center">
                        <Typography className={styles.title}><strong style={{color:'#63C0FF'}}>P</strong>aulo</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Typography className={styles.description1} >Thank you for visiting my portfolio!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Typography className={styles.description2} >You may also visit my social media account for more info.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" mt={4}>
                        <img src={facebook} alt="facebook" height="40" />
                        <img src={twitter} alt="twitter" height="40" style={{marginLeft:'20px'}}/>
                        <img src={instagram} alt="instagram" height="40" style={{marginLeft:'20px'}}/>
                        <img src={linkedin} alt="linkedin" height="40" style={{marginLeft:'20px'}}/>
                    </Box>
                    <Container>
                        <Box className={styles.hrfooter}/>
                    </Container>
                    <Box display="flex" justifyContent="center">
                        <Typography className={styles.description3} >Copyright ©2021 All rights reserved | This template is made with  by <span style={{color:'#63C0FF',fontSize:'16px'}}> John Paulo Moreno</span></Typography>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}
export default Footer;