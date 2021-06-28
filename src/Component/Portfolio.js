import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Galery from './Galery'
import MobileGallery from './MobileGallery'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const useStyles = makeStyles({
    tab:{
        fontFamily:'poppins',
        fontStyle:'uppercase',
        color:'#8A8FA3'
    },
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
  });
const Portfolio = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <>
        <Container>
                <Box display="flex" justifyContent="center">
                    <Typography className={classes.title}>PortFolio</Typography>
                </Box>  
                <Box display="flex" justifyContent="center">
                    <Typography className={classes.description} >My work example</Typography>
                </Box>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                className={classes.tab}
                centered
            >
                <Tab label="Web Design" {...a11yProps(0)} />
                <Tab label="Mobile Design" {...a11yProps(1)} />
            </Tabs> 
            <TabPanel value={value} index={0}>
              <Galery/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MobileGallery/>
            </TabPanel>
        </Container>
        </>
    )
};
export default Portfolio;
