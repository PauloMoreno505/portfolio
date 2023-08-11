import { Box, Container, IconButton } from '@mui/material'
import { Copyright, Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

export const Footer = () => {
    const acc = [
        {link: 'https://github.com/PauloMoreno505', icon: <GitHub sx={{color:"#0A0A0A"}} />},
        {link: 'https://www.linkedin.com/in/paulo-moreno-710791206/', icon: <LinkedIn sx={{color:"#0A0A0A"}} />},
        {link: 'https://www.facebook.com/profile.php?id=100092982214983', icon: <Facebook sx={{color:"#0A0A0A"}} />},
        {link: 'https://www.instagram.com/paulomoren0/', icon: <Instagram sx={{color:"#0A0A0A"}} />},
        {link: 'https://twitter.com/pawmoreno', icon: <Twitter sx={{color:"#0A0A0A"}} />},
    ]

    const gotoHandler = (newtab) => {
        window.open( newtab , '_blank').focus()
    }

    return (
        <Box width="100%" height="100%" bgcolor="#0A0A0A">
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" alignItems="center" gap={3} py="50px" >
                {
                    acc.map((v, i) => (
                        <IconButton key={i} onClick={() => gotoHandler(v.link)}sx={{background:'#FFFFFF', '&:hover':{background:'#FFFFFF'}}}>
                            {v.icon}
                        </IconButton>
                    ))
                }
                </Box>
                <Box width="100%" height="1px" bgcolor="#fff"/>
                <Box  display="flex" justifyContent="center" alignItems="center" py="6px">
                    <Copyright sx={{color:'#FFFFFF',}}/>
                    <Box fontSize="14px" color="#FFFFFF" > &nbsp; John Paulo Moreno All right reserved.</Box>
                </Box>
            </Container>
        </Box>
    )
}
