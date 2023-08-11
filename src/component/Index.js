import React from 'react'
import { LandingPage } from './LandingPage'
import { Box } from '@mui/material'
import { Navbar } from './Navbar'
import { Element } from 'react-scroll'
import { About } from './About'
import { Skills } from './Skills'
import { Project } from './Project'
import { Contact } from './Contact'
import { Footer } from './Footer'

export const Desktop = () => {
    return (
        <Box>
            <Navbar/>
            <Element name="home" className="element">
                <LandingPage/>
            </Element>
            <Element name="about" className="element">
                <About/>
            </Element>
            <Element name="skills" className="element">
                <Skills/>
            </Element>
            <Element name="project" className="element">
                <Project/>
            </Element>
            <Element name="contact" className="element">
                <Contact/>
            </Element>
            <Footer/>
        </Box>
    )
}
