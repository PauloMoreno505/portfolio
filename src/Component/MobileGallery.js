import React,{useState,useCallback,} from 'react'
import { Container, createMuiTheme, makeStyles, Box, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import ImageViewer from 'react-simple-image-viewer';
import one from '../svg/mobile business.svg'
import two from '../svg/mobile paymeshare.svg'
import three from '../svg/mobile teambond.svg'
import four from '../svg/mobile teambond1.svg'


const theme = createMuiTheme({
    typography:{
        fontFamily:'poppins'
    },
    overrides:{
        MuiLink:{
            root:{
                fontFamily:'poppins'
            },
        },
        MuiTypography:{
            root:{
                fontFamily:'poppins'
            }
        },
    }
});
const useStyles = makeStyles(() => ({
    title:{
        fontSize:'30px',
        fontWeight:'600',
        color:'#4A4A4A',
        marginTop:'100px'
    },
    description:{
        fontSize:'16px',
        color:'#8A8FA3',
        marginTop:'10px',
        paddingBottom:'80px'
    },
    mobiledesign:{
        fontSize:'16px',
        color:'#8A8FA3',
        marginTop:'50px',
        paddingBottom:'80px'
    },
}))
const MobileGallery = () => {
    const styles =useStyles();
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [ 
        one, two, three, four
    ];
    const openImageViewer = useCallback(index => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);
    
      const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
      };
    return (
        <>
        <ThemeProvider theme={theme}>
            <Box style={{height:'700px', backgroundColor:'#F6FCFF'}}>
            <Box display="flex" justifyContent="center">
                    <Typography className={styles.title}>Mobile</Typography>
                </Box>  
                <Box display="flex" justifyContent="center">
                    <Typography className={styles.description} >Mobile Design</Typography>
                </Box>
                <Container display="flex">
                    <div>
                        {images.map((src, index) => (
                            <img
                            src={src}
                            onClick={() => openImageViewer(index)}
                            key={index}
                            style={{ margin: "5px",height:'280px', width:'280px',  }}
                            />
                        ))}

                        {isViewerOpen && (
                            <ImageViewer
                            src={images}
                            currentIndex={currentImage}
                            onClose={closeImageViewer}
                            backgroundStyle={{
                                backgroundColor: "rgba(0,0,0,0.9)"
                            }}
                            />
                        )}
                        </div>
                </Container>
            </Box>
        </ThemeProvider>
        </>
    )
}

export default MobileGallery
