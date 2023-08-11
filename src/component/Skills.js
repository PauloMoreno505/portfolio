import React from 'react'
import { Avatar, Box, Container, Grid, useMediaQuery } from '@mui/material'
import { Css, Html, Javascript } from '@mui/icons-material'
import { APIIcon, GitIcon, LibraryIcon, PostmanIcon, ReactIcon, RoutIcon, WebpackIcon, WordPressIcon } from '../assets/icon/SvgIcon'
import { Fade } from "react-awesome-reveal";

export const Skills = () => {
    const small = useMediaQuery('(max-width:900px)');

    const frontend = [
        {name: 'HTML', icon: < Html sx={{color:"#0A0A0A", fontSize:'35px'}} /> },
        {name: 'CSS', icon: < Css sx={{color:"#0A0A0A", fontSize:'35px'}} /> },
        {name: 'JavaScript', icon: < Javascript sx={{color:"#0A0A0A", fontSize:'35px'}} /> },
        {name: 'React JS', icon: < ReactIcon/> },
        {name: 'REST API', icon: <APIIcon/> },
        {name: 'Git', icon: <GitIcon/> },
        {name: 'JSX', icon: <Box color="#0A0A0A" fontSize="15px" fontWeight="700">JSX</Box> },
        {name: 'Routing', icon: <RoutIcon/> },
        {name: 'React Hooks', icon: < ReactIcon/> },
        {name: 'Postman (API Testing)', icon: < PostmanIcon/> },
        {name: 'Webpack & Build Tools', icon: <WebpackIcon/> },
        {name: 'UI/UX Design Principles', icon: <LibraryIcon/> },
        {name: 'WordPress Elementor', icon: < WordPressIcon/> },
    ]

    return (
        <Box height="100%" width="100%" bgcolor="#F6F6F6" pt={small ? "40px" : "70px"}>
            <Fade direction="up" triggerOnce>
                <Box bgcolor="#0A0A0A" height="100%" width="100%" borderRadius={small ? "30px" : "60px"} py={small ? "40px" : "100px"}>
                    <Box color="#F6F6F6" fontSize={small ? "24px" : "30px"} fontWeight="600" textAlign="center" pb="70px">My Skills</Box>
                    <Container maxWidth="lg">
                        <Fade direction="up" triggerOnce>
                            <Box flexDirection="column" display="flex" gap={10} px="16px" >
                                <Grid container spacing="24px">
                                    {
                                        frontend.map((v, i) => (
                                            <Grid item lg={3} md={4} sm={6} xs={12} key={i}>
                                                    <Box display="flex" alignItems="center" gap={2}>
                                                        <Avatar variant="rounded" sx={{background:'#F6F6F6'}} >
                                                            {v.icon}
                                                        </Avatar>
                                                        <Box color="#F6F6F6" fontSize={small ? "16px" : "18px"} >{v.name}</Box>
                                                    </Box>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </Fade>
                    </Container>
                </Box>      
            </Fade>
        </Box>
    )
}
