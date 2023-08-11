import { useEffect, useState } from 'react'
import { Box, AppBar, Toolbar, Container, useMediaQuery, useScrollTrigger, Slide, IconButton, SwipeableDrawer } from '@mui/material'
import { Link, animateScroll as scroll } from 'react-scroll'
import { Dehaze, West } from '@mui/icons-material';
import logo from '../assets/image/logo.png'
import PropTypes from 'prop-types';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
    }
  
    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

export const Navbar = (props) => {
    const [/* isActive */, setIsActive] = useState('home');
    const [mobileOpen, setMobileOpen] = useState(false);
    const small = useMediaQuery('(max-width:900px)');

    const toggleDrawer = (newOpen) => () => {
        setMobileOpen(newOpen);
    };

    const gotoHandle = (link) => {
        setIsActive(link)
        setMobileOpen(false)
    }

    const scrollToTop = () => {
		scroll.scrollToTop()
	}

    const handleNavigation = () => {
		setIsActive('')
	};

    useEffect(() => {
		window.addEventListener("scroll", handleNavigation);
		return () => { 
            window.removeEventListener("scroll", handleNavigation) 
        };

        // eslint-disable-next-line
	}, []);

    return (
        <Box>
            {
                small ? 
                    <Box>
                        <HideOnScroll {...props}>
                            <AppBar sx={{background:'#FFFFFF', boxShadow:'none'}}>
                                <Toolbar>
                                    <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                                        <IconButton onClick={() => scrollToTop()} sx={{cursor:'pointer'}}>
                                            <img src={logo} alt="logo" style={{height: '25px', width: '100%', objectFit:'contain'}}/>
                                        </IconButton>
                                        <IconButton onClick={toggleDrawer(true)}>
                                            <Dehaze sx={{color: '#242424'}} />
                                        </IconButton>
                                    </Box>
                                </Toolbar>
                            </AppBar>
                        </HideOnScroll>
                        <SwipeableDrawer
                            anchor="left"
                            open={mobileOpen}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                            PaperProps={{sx:{width: '280px'}}}
                        >
                            <Box width="100%">
                                <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                                    <Box onClick={() => scrollToTop()} sx={{cursor:'pointer'}}>
                                        <img src={logo} alt="logo" style={{height: '25px', width: '100%', objectFit:'contain'}}/>
                                    </Box>
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <West sx={{color: '#242424', fontSize: '18pWest'}} />
                                    </IconButton>
                                </Box>
                                <Box flexDirection="column" display="flex" alignItems="center" gap={5} >
                                    <Link onClick={() => gotoHandle('home')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="home" spy={true} smooth={true} duration={500}>
                                        Home
                                    </Link>
                                    <Link onClick={() => gotoHandle('about')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="about" spy={true} smooth={true} duration={500}>
                                        About
                                    </Link>
                                    <Link onClick={() => gotoHandle('skills')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="skills" spy={true} smooth={true} duration={500}>
                                        Skills
                                    </Link>
                                    {/* <Link onClick={() => gotoHandle('experience')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="experience" spy={true} smooth={true} duration={500}>
                                        Experience
                                    </Link> */}
                                    <Link onClick={() => gotoHandle('project')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="project" spy={true} smooth={true} duration={500}>
                                        Project
                                    </Link>
                                    <Link onClick={() => gotoHandle('contact')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="contact" spy={true} smooth={true} duration={500}>
                                        Contact
                                    </Link>
                                </Box>
                            </Box>
                        </SwipeableDrawer>
                    </Box>
                :
                    <AppBar component="nav" sx={{background:'#fff', boxShadow:'none'}} >
                        <Toolbar>
                            <Container  maxWidth="lg" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Box onClick={() => scrollToTop()} sx={{cursor:'pointer'}}>
                                    <img src={logo} alt="logo" style={{height: '35px', width: '100%', objectFit:'contain'}}/>
                                </Box>
                                    <Box display="flex" alignItems="center" gap={5} >
                                        <Link onClick={() => gotoHandle('home')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="home" spy={true} smooth={true} duration={500}>
                                            Home
                                        </Link>
                                        <Link onClick={() => gotoHandle('about')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="about" spy={true} smooth={true} duration={500}>
                                            About
                                        </Link>
                                        <Link onClick={() => gotoHandle('skills')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="skills" spy={true} smooth={true} duration={500}>
                                            Skills
                                        </Link>
                                        {/* <Link onClick={() => gotoHandle('experience')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="experience" spy={true} smooth={true} duration={500}>
                                            Experience
                                        </Link> */}
                                        <Link onClick={() => gotoHandle('project')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="project" spy={true} smooth={true} duration={500}>
                                            Project
                                        </Link>
                                        <Link onClick={() => gotoHandle('contact')} activeClass={"nav"} style={{color:'#505050', cursor: 'pointer'}} to="contact" spy={true} smooth={true} duration={500}>
                                            Contact
                                        </Link>
                                    </Box>
                            </Container>
                        </Toolbar>
                    </AppBar>
            }
        </Box>
    )
}
