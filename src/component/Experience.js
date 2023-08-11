import { Avatar, Box, Container, Divider, Link, useMediaQuery } from '@mui/material'
import I4one from  '../assets/image/i4one Logo.png'

export const Experience = () => {
    const small = useMediaQuery('(max-width:900px)');
    const cp = useMediaQuery('(max-width: 517px)');

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
        
        if (years === 0) {
            return `${months} months`
        } else if(months === 0){
            return `${years} years`
        } else {
            return `${years} years and ${months} months`
        }
    };
    
    const startDate = new Date('2019-12-01')
    const endDate = new Date()
    const totalexp = TotalExperience(startDate, endDate);

    const currentExp = (startDate, endDate) => {
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
        
        if (years === 0) {
            return `${months} months`
        } else if(months === 0){
            return `${years} years`
        } else {
            return `${years} years and ${months} months`
        }
    };
    
    const startC = new Date('2021-01-01')
    const endC= new Date()
    const Currentexp = currentExp(startC, endC);

    const PastExp = (startDate, endDate) => {
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
        
        if (years === 0) {
            return `${months} months`
        } else if(months === 0){
            return `${years} years`
        } else {
            return `${years} years and ${months} months`
        }
    };
    
    const startP = new Date('2019-12-01')
    const endP= new Date('2021-01-01')
    const pasrexp = PastExp(startP, endP);

    return (
        <Box height="100%" width="100%" bgcolor="#F6F6F6" py={small ? "60px" : "100px"}>
            <Box fontSize={small ? "24px" : "30px"} fontWeight="600" color="#242424" textAlign="center" pb={small ? "40px" : "100px"}> My Experience</Box>
            <Container maxWidth="lg">
                <Box onClick={()=> window.open("https://i4one.club/", "_blank")} sx={{cursor: 'pointer'}} display="flex" alignItems="flex-start" gap={3} >
                    <Avatar src={I4one} alt="I4one" variant='rounded' sx={{width: '70px', height:'65px'}} />
                    <Box>
                        <Link underline="hover" color="inherit" sx={{fontSize: small ? "24px" : "25px", fontWeight:'600'}}>
                            I4one
                        </Link>
                        <Box fontSize="14px" fontWeight="300" >{totalexp}</Box>
                    </Box>
                </Box>
                <Box display="flex" mt="15px" ml={cp ? "0px" : "90px"}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box fontSize="35px" color="#707070" >•</Box>
                        <Divider sx={{height: cp ? '260px' : '210px', width: '2px', background:'#707070' }}/>
                        <Box fontSize="35px" color="#707070" >•</Box>
                    </Box>
                    <Box mt="10px" ml="18px" display="flex" flexDirection="column" gap={5}>
                        <Box>
                            <Box fontSize={cp ? "20px" : "22px"} fontWeight="600" >Frontend Developer</Box>
                            <Box display="flex" alignItems="center" fontWeight="300">
                                <Box fontSize="14px" >Jan 2021 - Present</Box>
                                <Box color="#707070" px="8px" >•</Box>
                                <Box fontSize="14px">{Currentexp}</Box>
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} mt="12px" ml="12px">
                                <Box fontSize={14} display="flex" alignItems="flex-start">
                                    <Box>•</Box> &nbsp;&nbsp;&nbsp; <Box>Developed and maintained responsive web applications using ,TML, CSS, and JavaScript & React js</Box>
                                </Box>
                                <Box fontSize={14} display="flex" alignItems="flex-start">
                                    <Box>•</Box> &nbsp;&nbsp;&nbsp; <Box>Collaborated with designers and backend developer.</Box>
                                </Box>
                                <Box fontSize={14} display="flex" alignItems="flex-start">
                                    <Box>•</Box> &nbsp;&nbsp;&nbsp; <Box>Learn and understand user interactions.</Box>
                                </Box>
                                <Box fontSize={14} display="flex" alignItems="flex-start">
                                    <Box>•</Box> &nbsp;&nbsp;&nbsp; <Box>Creating reusable code for future use.</Box>
                                </Box>
                                <Box fontSize="16px">
                                    • &nbsp; Code Review
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box fontSize={cp ? "20px" : "22px"} fontWeight="600">UI Designer</Box>
                            <Box display="flex" alignItems="center" fontWeight="300">
                                <Box fontSize="14px" > Dec 2019 - Jan 2021</Box>
                                <Box color="#707070" px="8px" >•</Box>
                                <Box fontSize="14px">{pasrexp}</Box>
                            </Box>
                            <Box display="flex" flexDirection="column" gap={1} mt="12px" ml="12px">
                                <Box fontSize={14} display="flex" alignItems="flex-start">
                                    <Box>•</Box> &nbsp;&nbsp;&nbsp; <Box> Designed visually appealing user interfaces with a focus on user experience, branding, and accessibility.</Box>
                                </Box>
                                <Box fontSize={14} display="flex" alignItems="flex-start">
                                    <Box>•</Box> &nbsp;&nbsp;&nbsp; <Box> Worked on responsive designs for web and mobile applications, ensuring consistency across different devices and platforms.</Box>
                                </Box>
                                <Box fontSize={14} display="flex" alignItems="flex-start">
                                    <Box>•</Box> &nbsp;&nbsp;&nbsp; <Box>Developed and maintained design systems and style guides to ensure design consistency and scalability.</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
