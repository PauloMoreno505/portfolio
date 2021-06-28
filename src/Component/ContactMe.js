import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, createMuiTheme, makeStyles, Avatar, Box, Typography, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import location from '../svg/location.svg'
import contact from '../svg/contact.svg'
import email from '../svg/email.svg'

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
const useStyles = makeStyles((theme) => ({
    title:{
        fontSize:'30px',
        fontWeight:'600',
        color:'#4A4A4A',
        marginTop:'100px'
    },
    description:{
        fontSize:'16px',
        color:'#8A8FA3',
        marginTop:'10px',
        paddingBottom:'60px'
    },
    avatarbg:{
        background:'#FFFFFF',
        height:'100px',
        width:'100px',
        boxShadow: ' 0px 3px 20px rgba(118, 130, 183, .16)',
    },
    question:{
        marginTop:'38px',
        fontSize:'20px',
        fontWeight:'600',
        color:'#4A4A4A'
    },
    answer:{
        marginTop:'18px',
        marginBottom:'154px',
        fontSize:'16px',
        color:'#4A4A4A'
    }
}))

const ContactMe = () => {
    const styles =useStyles();

    return(
        <>
        <ThemeProvider theme={theme}>
            <Box>
                <Box display="flex" justifyContent="center">
                    <Typography className={styles.title}>Contact Me</Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Typography className={styles.description} >Send Me a Message</Typography>
                </Box>
            <Container>
            <Fade bottom cascade>
                <Grid container display="flex" justify="center" alignItems="center" style={{marginTop:'30px',marginBottom:'30px'}}>
                    <Grid item lg={4}>
                        <Box display="flex" justifyContent="center">
                            <Avatar className={styles.avatarbg}>
                                <img src={location} alt="location" width="30px"/>
                            </Avatar>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography className={styles.question}>Address</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography className={styles.answer}>Ibayo-Tipas Taguig City Manila</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={4}>
                        <Box display="flex" justifyContent="center">
                            <Avatar className={styles.avatarbg}>
                                <img src={contact} alt="contact" width="35px"/>
                            </Avatar>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography className={styles.question}>Contact Number</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography className={styles.answer}>+63 995 620 7755</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={4}>
                        <Box display="flex" justifyContent="center">
                            <Avatar className={styles.avatarbg}>
                                <img src={email} alt="email" width="37px"/>
                            </Avatar>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography className={styles.question}>Email Address</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography className={styles.answer}>johnpaulomoreno@gmail.com</Typography>
                        </Box>
                    </Grid>
                </Grid>
                </Fade>
            </Container>
            </Box>
        </ThemeProvider>
        </>
    )
}
export default ContactMe;