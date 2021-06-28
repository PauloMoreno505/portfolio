import React,{useState,useCallback,} from 'react';
import { Container, createMuiTheme, makeStyles, Box, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import five from '../svg/pointing.svg'
import six from '../svg/sureipass.svg'
import seven from '../svg/sureipass1.svg'
import eight from '../svg/sureipass2.svg'
import nine from '../svg/sureipass3.svg'
import ten from '../svg/web paymeshare.svg'

import ImageViewer from 'react-simple-image-viewer';

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
        paddingBottom:'60px'
    },
    webdesign:{
        fontSize:'16px',
        color:'#8A8FA3',
        marginTop:'10px',
        paddingBottom:'60px'
    },
}))

const Galery = () =>{
    const styles =useStyles();
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [ 
        five, six, seven, eight, nine, ten
    ];

    const openImageViewer = useCallback(index => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);
    
      const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
      };
    return(
        <>
        <ThemeProvider theme={theme}>
            <Box style={{height:'1000px'}}>
                <Box display="flex" justifyContent="center">
                    <Typography className={styles.title}>Desktop</Typography>
                </Box>  
                <Box display="flex" justifyContent="center">
                    <Typography className={styles.description} >Web Design</Typography>
                </Box>
                <Container display="flex">
                    <div>
                        {images.map((src, index) => (
                            <img
                            src={src}
                            onClick={() => openImageViewer(index)}
                            key={index}
                            style={{ margin: "5px",height:'280px', width:'400px',  }}
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
export default Galery;