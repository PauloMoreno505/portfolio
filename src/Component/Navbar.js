import {Grid, Typography, Container, makeStyles, AppBar, Box } from "@material-ui/core"
import { animateScroll as scroll } from "react-scroll";
  

const useStyles = makeStyles(() => ({
    plogo:{
        color:'#DE8226',
        fontSize:'46px',
        fontWeight:'bold'
   },
   logo:{
    ontSize:'30px',
    fontWeight:'600',
    color:'#636363',
   },
   toolbar:{
       float:'right',
       display:'flex',
   },
   category:{
       fontFamily:'poppins',
       fontSize:'16px',
       color:'#4A4A4A',
       paddingRight:'20px',
       paddingLeft:'20px'
   },
   top:{
       backgroundColor:'#1C1C1C',
       padding:'20px' ,     
       boxShadow:'none',
       zIndex:'0'
   }


}))
const Navbar = () => {
    const styles = useStyles()
    const scrollToTop = () => {
        scroll.scrollToTop();
      };


    return(
        <>
        <AppBar p={5} className={styles.top}>
            <Container>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item sm={4}>
                        <Typography className={styles.plogo} onClick={scrollToTop} >
                            Paulo
                        </Typography>
                    </Grid>
                    <Grid item sm={8}>
                        <Box  display="flex" justifyContent="flex-end" alignItems="center" >
                        
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
        </>
    )
}
export default Navbar;