import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react';
import abt from '../assets/image/Desktop_about.png'
import { Fade } from "react-awesome-reveal";

export const About = () => {
    const [age, setAge] = useState('');
    const small = useMediaQuery('(max-width:900px)');

    const calculateAge = () => {
        const birthDateObj = new Date('1998-06-24');
        const currentDate = new Date();
        
        if (birthDateObj > currentDate) {
            setAge('Invalid date');
        } else {
            const ageInMilliseconds = currentDate - birthDateObj;
            const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
            setAge(ageInYears);
        }
    };

    useEffect(() => {
        calculateAge()

        // eslint-disable-next-line
    }, [])

    const info = [
        {name:'Name', data: 'John Paulo Moreno'},
        {name:'Age', data: age !== '' ? `${age} year-old` : 'Not found'},
        {name:'Address', data: 'Ibayo-Tipas Taguig City Philippines'},
        {name:'School Graduated', data: 'Occidental Mindoro State College'},
        {name:'Course', data: 'Bachelor of Science in Information Technology'},
        {name:'Year Graduated', data: '2019'},
    ]

    return (
        <Box height="100%" width="100%" bgcolor="#F6F6F6" pb="50px" pt={small ? "40px" : "100px"}>
            <Box fontSize={small ? "24px" : "30px"} fontWeight="600" color="#242424" textAlign="center" pb={small ? "40px" : "100px"}> About me</Box>
            <Container maxWidth="lg">
                <Grid container spacing={6} direction="row" justifyContent="center" alignItems="center">
                        <Grid item md={6} >
                            <Fade direction="up" triggerOnce>
                                <img src={abt} alt="abt" style={{height:'auto', width:'100%', objectFit:'contain'}} />
                            </Fade>
                        </Grid>
                    <Grid item md={6}>
                        <Fade cascade direction="up" triggerOnce>
                            <Box >
                                <span>Hello! I'm John Paulo Moreno a dedicated Frontend Developer.</span>
                                <p>
                                    I am committed to bringing creative designs to life through clean and efficient code. 
                                    I'm passionate about pushing the boundaries of web technologies 
                                    to deliver user-centric solutions that captivate and engage audiences.
                                </p>
                            </Box>
                        </Fade>
                        <Fade cascade direction="up" triggerOnce>
                            <Box height="100%" mt="24px" >
                                {
                                    info.map((v, i) => (
                                        <Grid key={i} container direction="row" justifyContent="center" alignItems="flex-start">
                                            <Grid item xs={4}>
                                                <Box my="8px" fontWeight="600">{v.name} :</Box>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Box my="8px" >{v.data}</Box>
                                            </Grid>
                                        </Grid>
                                    ))
                                }
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
