import { Box, Container } from '@material-ui/core'
import React from 'react'
import Navbar from './Nav/PcNav'
import Home from './Home/PcHome'

const Index = () => {
    return (
        <Box>
            <Navbar />
            <Home />
        </Box>
    )
}

export default Index