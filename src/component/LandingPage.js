import { Box, Button, Container, Grid, useMediaQuery } from '@mui/material'
import lacnding_image from '../assets/image/landing_image.png'
import JohnPauloMoreno_CV from '../assets/file/Paulo Moreno - CV.pdf'
import { Fade } from "react-awesome-reveal";

export const LandingPage = () => {
    const small = useMediaQuery('(max-width:900px)');
    const cp = useMediaQuery('(max-width: 517px)');

    return (
        <Box width="100%" height={small ? "100%" : "100vh"} display="flex" alignItems="center" pt={small ? "100px" : 0}>
            <Container maxWidth="lg">
                <Fade>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={5} xs={12} >
                            <Box height="100%" display="flex" justifyContent="center" alignItems={small ? "center" : "flex-start"} flexDirection="column" gap={cp ? 1 : 0}>
                                <Box fontSize="16px" fontWeight="400" color="#242424">Hello I am</Box>
                                <Box fontSize={cp ? "35px" : "49px"} fontWeight="600" color="#242424">John Paulo Moreno</Box>
                                <Box fontSize="24px" fontWeight="400" color="#242424">Frontend Developer</Box>
                                <Button
                                    href={JohnPauloMoreno_CV} 
                                    download="JohnPauloMoreno_CV" 
                                    target='_blank'
                                    sx={{
                                        marginTop:cp ? '18px':'64px',
                                        background:'#242424',
                                        height:'60px',
                                        width:'250px',
                                        textTransform:'capitalize',
                                        color:'#FFFFFF',
                                        fontSize:'16px',
                                        borderRadius:'10px',
                                        fontFamily:'Poppins',
                                        '&:hover':{
                                            background:'#242424',
                                        }
                                    }}
                                >
                                    Download CV
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={7} sm={12}>
                            <img src={lacnding_image} alt="lacnding_image" style={{height: small ? '500px' : 'auto', width:'100%', objectFit:'contain'}} />
                        </Grid>
                    </Grid>
                </Fade>
            </Container>
        </Box>
    )
}
