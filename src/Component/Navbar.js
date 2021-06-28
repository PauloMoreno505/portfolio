import {Grid, Typography, Container, makeStyles, AppBar } from "@material-ui/core"
import { animateScroll as scroll } from "react-scroll";
  

const useStyles = makeStyles(() => ({
    plogo:{
    fontSize:'30px',
    fontWeight:'600',
    color:'#63C0FF',
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
       backgroundColor:'#F6FCFF',
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
                    <Grid item>
                        <Typography className={styles.plogo} onClick={scrollToTop} >P<span className={styles.logo}>aulo</span></Typography>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
        </>
    )
}
export default Navbar;