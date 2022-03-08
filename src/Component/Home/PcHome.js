
import { Grid } from '@material-ui/core'
import { Box, Container, Typography, Button } from '@mui/material'
import Typical from 'react-typical'
import React from 'react'
import JohnPauloMoreno_CV from '../../assets/file/John Paulo Moreno CV.pdf'
import landing from '../../assets/image/landing.png'
  

const PcHome = () => {
    
    return (
        <Box sx={{backgroundColor:'#1C1C1C', height: '600px', maxHeight: '100%'}}>
            <Container>
                <Grid container>
                    <Grid item sm={6} >
                        <Box height="500px" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
                            <Typography
                                sx={{
                                    fontSize:'18px',
                                    fontWeight:'100',
                                }}
                            >Hello I'm
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize:'70px',
                                    color:'#DE8226',
                                    fontWeight:'bold'
                                }}
                            >Paulo Moreno
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize:'22px',
                                    fontWeight:'300'
                                }}
                            >
                                <Typical
                                    steps={['UI/UX Designer', 2000, 'Front-End Developer',2000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </Typography>
                            <Box display="flex" alignItems="center" mt={5}>
                                <Button
                                    href={JohnPauloMoreno_CV} download="JohnPauloMoreno_CV" target='_blank'
                                    variant="contained"
                                    sx={{
                                        background:'#DE8226',
                                        height:'60px',
                                        width:'200px',
                                        textTransform:'capitalize',
                                        color:'#000000',
                                        fontSize:'16px',
                                        '&:hover':{
                                            background:'#DE8226',
                                        }
                                    }}
                                >Download CV </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <Box>
                            <img src={landing} alt="landing" height="600px" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default PcHome