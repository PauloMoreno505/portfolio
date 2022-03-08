import React from 'react'
import { AppBar, Box, Container, Grid, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { animateScroll as scroll , Link } from "react-scroll";

const useStyles =  makeStyles(() => ({
    nav:{
        backgroundColor:'#1C1C1C',
        boxShadow:'none',
    },
    logo:{
        fontSize:'40px',
        color:'#DE8226',
        fontWeight:'bold',
    }
}))

function PCNav() {
    const styles = useStyles();
    return (
        <AppBar className={styles.nav} position="sticky">
            <Toolbar>
                <Container>
                    <Grid container py={2} display="flex" alignItems="center">
                        <Grid sm={2} >
                            <Typography className={styles.logo}>
                                {/* Paulo */}
                            </Typography>
                        </Grid>    
                        <Grid sm={10} >
                            <Box display="flex" justifyContent="flex-end" alignItems="center" >
                                <Box mx={4}>
                                    <Typography>Home</Typography>
                                </Box>
                                <Box mx={4}>
                                    <Typography>About</Typography>
                                </Box>
                                <Box mx={4}>
                                    <Typography>Services</Typography>
                                </Box>
                                <Box mx={4}>
                                    <Typography>Portfolio</Typography>
                                </Box>
                                <Box mx={4}>
                                    <Typography>Contact</Typography>
                                </Box>
                            </Box>
                        </Grid>    
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default PCNav