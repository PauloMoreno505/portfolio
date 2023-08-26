import { Box, Container, Grid, IconButton, Tooltip, useMediaQuery } from '@mui/material'
import { OpenInNew } from '@mui/icons-material';
import { Fade } from "react-awesome-reveal";
import { withStyles } from "@mui/styles";
import css from '../assets/image/logo/CSS_logo.png'
import html from '../assets/image/logo/HTML_logo.png'
import js from '../assets/image/logo/JavaScript_logo.png'
import react from '../assets/image/logo/React_logo.png'
import mui from '../assets/image/logo/MUI_logo.png'
import psllogo from '../assets/image/psl_logo.png'


export const CSSToolTip = withStyles({
    tooltip:{
        backgroundColor: '#0A0A0A',
        padding: '8px',
        color: '#FFFFFF',
        boxShadow:'0px 0px 12px rgba(0, 0, 0, 0.08) !important',
        borderRadius: '6px'
    },
    arrow:{
        color: '#0A0A0A'
    }
})(Tooltip)

export const Project = () => {
    const small = useMediaQuery('(max-width:900px)');
   
    const TotalExperience = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        if (start > end) {
          return
        }
        
        let years = end.getFullYear() - start.getFullYear()
        let months = end.getMonth() - start.getMonth()
        
        if (months < 0) {
            years -= 1
            months += 12
        }

        if (months === 0) {
            return `${years}`
        } else if (months !== 0){
            return `${years} +`
        }

    };
    
    const startDate = new Date('2019-12-01')
    const endDate = new Date()
    const totalexp = TotalExperience(startDate, endDate);

    const protool = [
        {   
            logo: psllogo,
            name: 'POFPersonal',
            link:'https://personal.pofsis.com/',
            discreption:'POFPersonal is a platform that helps your personal growth to be 10x Bigger, 10x Faster, and 10x Higher.',
            stacks: [
                {logo: css, name: 'CSS'},
                {logo: html, name: 'HTML'},
                {logo: js, name: 'JavaScript'},
                {logo: react, name: 'React JS'},
                {logo: mui, name: 'Material UI'},
            ]
        },
        {
            logo: psllogo,
            name:'POFPersonal Website',
            link:'https://personal-main.pofsis.com/',
            discreption:'POFPersonal Website is to develop extraordinary mindset to students, working professionals, and consultants to achieve their ultimate goals.',
            stacks: [
                {logo: css, name: 'CSS'},
                {logo: html, name: 'HTML'},
                {logo: js, name: 'JavaScript'},
                {logo: react, name: 'React JS'},
                {logo: mui, name: 'Material UI'},
            ]
        },
    ]



    const pro = [
        {name: 'Client', count: '2'},
        {name: 'Project', count: '2'},
        {name: 'Prog. Language', count: '4'},
        {name: 'Experience', count: totalexp},
    ]


    return (
        <Box height="100%" width="100%" py={small ? "40px" : "100px"} bgcolor="#F6F6F6">
            <Box fontSize={small ? "24px" : "30px"} fontWeight="600" color="#242424" textAlign="center" pb={small ? "40px" : "100px"}> My Project</Box>
            <Container maxWidth="lg">
                <Grid container display="row" justifyContent="center">
                    {
                        pro.map((v, i) => (
                            <Grid item lg={3} md={3} sm={3} xs={6} key={i} >
                                <Box display="flex" alignItems="center" flexDirection="column" >
                                    <Box fontSize={small ? "18px" : "30px"} fontWeight="700" color="#454545" lineHeight="2.5rem">{v.count}</Box>
                                    <Box fontSize="14px" fontWeight="300" color="#616161">{v.name}</Box>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
                <Grid container spacing="40px" sx={{mt:"50px"}} direction="row" justifyContent="center" alignItems="center">
                    {
                        protool.map((v, i) => (
                            <Grid item lg={6} md={6} sm={6} xs={12} key={i}>
                                <Fade direction="up" triggerOnce>
                                    <Box height="250px" borderRadius="1.5rem" border="0.5px solid #cecece" sx={{'&:hover':{background: '#F6F6F6'}}} p="24px"  >
                                        <Box display="flex" justifyContent="space-between" alignItems="center">
                                            <img src={v.logo} alt={v.logo} style={{width: '50px', height:'50px'}} />
                                            <CSSToolTip title="Open Project" arrow placement="top">
                                                <IconButton sx={{borderRadius:'8px'}} onClick={()=> window.open(v.link, "_blank")}>
                                                    <OpenInNew sx={{fontSize:'18px'}}/>
                                                </IconButton>
                                            </CSSToolTip>
                                        </Box>
                                        <Box fontSize="18px" fontWeight="600" my="12px">{v.name}</Box>
                                        <Box fontSize="14px">{v.discreption}</Box>
                                        <Box mt="35px" display="flex" gap={3}>
                                            {
                                                v.stacks.map((d, i) => (
                                                    <CSSToolTip key={i} title={d.name} arrow placement='top'>
                                                        <img src={d.logo} alt="css" style={{height: '100%', maxHeight:'25px', objectFit:'contain', cursor:'pointer'}} />
                                                    </CSSToolTip>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                </Fade>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}
