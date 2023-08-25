import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, Container, Grid, Snackbar, TextField, useMediaQuery } from '@mui/material';
import { CheckCircle, Email, Room } from '@mui/icons-material';
import { Fade } from "react-awesome-reveal";

export const Contact = () => {
    const small = useMediaQuery('(max-width:900px)');
    const form = useRef();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const [hasError, sethasError] = useState(false)
    const [isLoad, setisLoad] = useState(false)
    const [isAlert, setisAlert] = useState(false)
    const [invalid, setinvalid] = useState(false)
    const [formData, setFormData] = useState({
            name: '',
            email: '',
            subject:'',
            message: ''
    });

    const sendEmail = (e) => {
        e.preventDefault();
        if (formData.name !== '' && formData.email !== '' && formData.subject !== '' && formData.message !== '') {
            if (emailRegex.test(formData.email)) {
                setisLoad(true)
                emailjs.sendForm('service_80yhjh1', 'template_qhixp2m', form.current, 'sCalrv-URE9OSlCjK')
                .then((result) => {
                    if (result.text === 'OK') {
                        setisAlert(true)
                        setFormData({...formData, name: '', email: '', subject:'', message: ''})
                        setisLoad(false)
                        setinvalid(false)
                        sethasError(false)
                    }
                }, (error) => {
                    setisLoad(false)
                    console.log(error.text);
                });
            } else {
                setinvalid(true)
            }
        } else {
            sethasError(true)
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setisAlert(false)
    }


    return (
        <Box height="100%" width="100%" py={small ? "40px" : "100px"} >
            <Snackbar open={isAlert} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center', }} >
                <Box px={2} py="10px" border="1px solid #008F5D" bgcolor="#E8F5E9" borderRadius="8px" color="#008F5D" fontSize="14px" display="flex" alignItems="center" >
                    <CheckCircle width="18px" height="18px" fill="#008F5D" /> &nbsp; &nbsp;Success sent!
                </Box>
            </Snackbar>
            <Box fontSize={small ? "24px" : "30px"} fontWeight="600" color="#242424" textAlign="center" pb={small ? "40px" : "100px"}>Contact me</Box>
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Fade direction="up" cascade triggerOnce> 
                            <Box component="form" ref={form} width="100%" display="flex" flexDirection="column" gap={3}>
                                    <TextField
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        name="user_name"
                                        value={formData.name}
                                        label="Name"
                                        fullWidth
                                        helperText={hasError && formData.name === '' && 'This field is required'}
                                        error={hasError && formData.name === '' ? true : false}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#707070', 
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#707070', 
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#707070',
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#707070',
                                                fontFamily:'Poppins'
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#707070', 
                                                fontFamily:'Poppins'
                                            },
                                            '& .MuiInputBase-input': {
                                                fontFamily:'Poppins'
                                            },
                                        }}
                                        />
                                    <TextField 
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        name="user_email"
                                        value={formData.email}
                                        label="Email"
                                        fullWidth
                                        helperText={hasError && formData.email === '' ? 'This field is required' : invalid ? 'Please enter a valid email address' : ''}
                                        error={hasError && formData.email === '' ? true : (invalid ? true : false)}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#707070', 
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#707070', 
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#707070',
                                            },
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#707070',
                                                fontFamily:'Poppins'
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#707070', 
                                                fontFamily:'Poppins'
                                            },
                                            '& .MuiInputBase-input': {
                                                fontFamily:'Poppins'
                                            },
                                        }}
                                        />
                                    <TextField 
                                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                        name="subject"
                                        value={formData.subject}
                                        label="Subject"
                                        fullWidth
                                        type="email"
                                        helperText={hasError && formData.subject === '' && 'This field is required'}
                                        error={hasError && formData.subject === '' ? true : false}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#707070', 
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#707070', 
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#707070',
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#707070',
                                                fontFamily:'Poppins'
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#707070', 
                                                fontFamily:'Poppins'
                                            },
                                            '& .MuiInputBase-input': {
                                                fontFamily:'Poppins'
                                            },
                                        }}
                                        />
                                    <TextField 
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        name="message"
                                        value={formData.message}
                                        label="Message"
                                        multiline
                                        rows={5}
                                        fullWidth
                                        helperText={hasError && formData.message === '' && 'This field is required'}
                                        error={hasError && formData.message === '' ? true : false}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#707070', 
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#707070', 
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#707070',
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#707070',
                                                fontFamily:'Poppins'
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#707070', 
                                                fontFamily:'Poppins'
                                            },
                                            '& .MuiInputBase-input': {
                                                fontFamily:'Poppins'
                                            },
                                        }}
                                    />
                                    <Box>
                                        <Button
                                                onClick={sendEmail}
                                                fullWidth
                                                sx={{
                                                    background:'#242424',
                                                    height:'60px',
                                                    textTransform:'capitalize',
                                                    color:'#FFFFFF',
                                                    fontSize:'16px',
                                                    borderRadius:'10px',
                                                    '&:hover':{
                                                        background:'#242424',
                                                    }
                                                }}
                                            >
                                                {
                                                    isLoad ? <div className="custom-loader"></div> : 'Send'

                                                }
                                        </Button>
                                    </Box>
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} display="flex" justifyContent="end" flexDirection="column" >
                        <Fade direction="up" triggerOnce >
                            <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" gap={3}>
                                    <Box display="flex" flexDirection="column" gap={3}>
                                        <Box display="flex" alignItems="center" gap={3}>
                                            <Email sx={{fontSize:'22px'}}/>
                                            <Box fontSize="16px" color="#242424">johnpaulomoreno3@gmail.com</Box>
                                        </Box>
                                        <Box display="flex" alignItems="center" gap={3}>
                                            <Room sx={{fontSize:'24px'}}/>
                                            <Box fontSize="16px" color="#242424">Ibayo-Tipas Taguig City Philippines</Box>
                                        </Box>
                                    </Box>
                                    <Box width="100%" height="100%">
                                        <iframe title="portfolio" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7724.20253459806!2d121.0836240450665!3d14.536199729195639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c63cb6ae0675%3A0x30d930f7890f0ff0!2sIbayo-Tipas%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1691574337528!5m2!1sen!2sph" width="100%" height="300" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </Box>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}