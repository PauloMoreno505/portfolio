import React,{useState,useCallback,} from 'react';
import { Container, createMuiTheme, makeStyles, Box, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import one from '../image/Paymeshare1.png'
import two from '../image/Paymeshare2.png'
import three from '../image/sureipass1.png'
import four from '../image/sureipass2.png'
import five from '../image/sureipass3.png'
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
    const images = [ one, two, three, four, five
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
            <Box>
                <Container display="flex">
                    <div>
                        {images.map((src, index) => (
                            <img
                            src={src}
                            onClick={() => openImageViewer(index)}
                            key={index}
                            style={{ margin: "5px",height:'200px', width:'300px',  }}
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
                            style={{zIndex:10}} 
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