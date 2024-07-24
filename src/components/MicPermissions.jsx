
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Link  } from '@mui/material';

import Window from "../assets/image/windows-system-step1.png";
import Window_two from "../assets/image/windows-system-step2.png";
import Window_three from "../assets/image/windows-system-step3.png";
import Window_Four from "../assets/image/windows-system-step4.png";

const MicPermissions = () => {

  return (
    <div>
       <Box style={{ display: 'block', }} sx={{ padding: '32px', }}>
            <Box>
              <Typography sx={{
                fontSize: '34px',
                color: '#000000de',
                margin: '0px 0px 0.35em',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '34px',
                lineHeight: 1.235,
                letterSpacing: '0.00735em',

              }} variant='h1'>Freed needs the microphone permission to capture visits
              </Typography>
              <Typography sx={{
                fontSize: '16px',
                color: '#000000de',
                margin: '0px 0px 5.6px',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.5,
                letterSpacing: '0.00938em',

              }} variant='p'>Please follow the steps below to allow Freed to access your microphone:
              </Typography>
            </Box>
            <Box sx={{
              marginTop: '5px',
            }}>
              <Typography sx={{
                margin: '0px',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: 1.6,
                letterSpacing: '0.0075em',
              }} variant='h3'>1. Use the Start menu to open Settings
              </Typography>
              <Box sx={{
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgba(0, 0, 0, 0.87)',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                borderRadius: '4px',
                boxShadow: '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
                display: 'inline-block',
                margin: '16px',
              }}>
                <img src={Window} alt="Window" />
              </Box>
            </Box>


            <Box sx={{
              marginTop: '5px',
            }}>
              <Typography sx={{
                margin: '0px',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: 1.6,
                letterSpacing: '0.0075em',
              }} variant='h3'>2. Click "Privacy"
              </Typography>
              <Box sx={{
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgba(0, 0, 0, 0.87)',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                borderRadius: '4px',
                boxShadow: '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
                display: 'inline-block',
                margin: '16px',
              }}>
                <img style={{ maxWidth: '50vw', }} src={Window_two} alt="Window" />
              </Box>
            </Box>


            <Box sx={{
              marginTop: '5px',
            }}>
              <Typography sx={{
                margin: '0px',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: 1.6,
                letterSpacing: '0.0075em',
              }} variant='h3'>3. Click "Microphone" in the left navigation bar, then make sure that it says "Microphone access for this device is on" (click Change if it's Off)
              </Typography>
              <Box sx={{
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgba(0, 0, 0, 0.87)',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                borderRadius: '4px',
                boxShadow: '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
                display: 'inline-block',
                margin: '16px',
              }}>
                <img style={{ maxWidth: '50vw', }} src={Window_three} alt="Window" />
              </Box>
            </Box>



            <Box sx={{
              marginTop: '5px',
            }}>
              <Typography sx={{
                margin: '0px',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: 1.6,
                letterSpacing: '0.0075em',
              }} variant='h3'>4. Scroll down and make sure that "Allow desktop apps to access your microphone" is On
              </Typography>
              <Box sx={{
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgba(0, 0, 0, 0.87)',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                borderRadius: '4px',
                boxShadow: '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
                display: 'inline-block',
                margin: '16px',
              }}>
                <img style={{ maxWidth: '50vw', }} src={Window_Four} alt="Window" />
              </Box>
            </Box>

            <Box>
              <Typography sx={{
                margin: '0px',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: 1.6,
                letterSpacing: '0.0075em',
              }}>5.<Link sx={{
                margin: '0px',
                fontFamily: 'inherit',
                color: 'rgb(25, 118, 210)',
                textDecoration: 'underline',
                textDecorationColor: 'rgba(25, 118, 210, 0.4)',
                marginLeft: '10px',
                cursor: 'pointer',
              }}>Click here</Link> to start capturing a visit</Typography>
            </Box>
          </Box>
    </div>
  )
}

export default MicPermissions
