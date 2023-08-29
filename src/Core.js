import { useEffect, useState } from 'react'
import { Desktop } from './component/Index';
import { Box } from '@mui/material'

export const Core = () => {
    const [loader, setloader] = useState(false)

    useEffect(() => {
        setloader(true)
        setTimeout(() => {
            setloader(false)
        }, 1000);
        
        console.log(`My Website V1.0.05 is running`);
        console.log('Last Update - 8/28/2023');

        // eslint-disable-next-line 
    }, [])

    return (
        <Box sx={{width: '100%', height: '100%'}}>
            {
                loader ?
                    <Box width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center" >
                        <div className="core-loader"></div>
                    </Box>
                :
                    <Box sx={{width: '100%', height: '100%'}}>
                        <Desktop/>
                    </Box>

            }
        </Box>
    )
}
