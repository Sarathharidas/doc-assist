// import Box from '@mui/material/Box';
// import { Typography, Link, Button, } from '@mui/material';
// import MicNoneIcon from '@mui/icons-material/MicNone';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import VisuallyHiddenInput from '@mui/icons-material'


// const Record = () => {



//     return (
//         <div>
//             <Box style={{ display: '', }}>
//                 <Button sx={{
//                     transition:
//                         'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, ' +
//                         'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, ' +
//                         'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
//                     borderRadius: '24px',
//                     padding: '0px 16px',
//                     minWidth: '48px',
//                     width: 'auto',
//                     height: '48px',
//                     zIndex: 1050,
//                     boxShadow:
//                         'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, ' +
//                         'rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, ' +
//                         'rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
//                     color: 'rgba(0, 0, 0, 0.87)',
//                     backgroundColor: 'rgb(224, 224, 224)',
//                     margin: '8px',
//                 }}>
//                     <MicNoneIcon />CAPTURE CONVERSATION</Button>
//                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: '15px', }}>
//                     <Typography sx={{
//                         textAlign: 'center', display: 'flex', width: '130px', justifyContent: 'center', gap: '10px',
//                     }}>
//                         <span
//                             style={{
//                                 borderBottom: '1px solid #000',
//                                 display: 'inline-block',
//                                 lineHeight: '0.1em',
//                                 margin: '10px 0 17px',
//                                 width: '50%',
//                             }}
//                         />
//                         or
//                         <span
//                             style={{
//                                 borderBottom: '1px solid #000',
//                                 display: 'inline-block',
//                                 lineHeight: '0.1em',
//                                 margin: '10px 0 17px',
//                                 width: '50%',
//                             }}
//                         />
//                     </Typography>
//                 </Box>

//                 <Box sx={{
//                     marginBottom: '25px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '5px',
//                 }}>
//                     <Typography sx={{ color: '#6b6b6b', fontSize: '14px', }}>Drag in or</Typography>

//                     <Button
//                         sx={{
//                             background: 'transparent',
//                             boxShadow: 'none',
//                             color: '#1976d2',
//                             padding: '0px',
//                             width: 'auto',
//                             display: 'contents',
//                             textTransform: 'capitalize',
//                             '&:hover': {
//                                 background: 'none',
//                                 boxShadow: 'none',
//                             },
//                             '& svg': {
//                                 display: 'none',
//                             },

//                         }}
//                         component="label"
//                         role={undefined}
//                         variant="contained"
//                         tabIndex={-1}
//                         startIcon={<CloudUploadIcon />}
//                     >
//                         Upload
//                         <VisuallyHiddenInput type="file" />
//                     </Button>

//                     <Typography sx={{ color: '#6b6b6b', fontSize: '14px', }}>a pre-recorded visit.</Typography>
//                 </Box>
//                 <Link sx={{
//                     fontSize: '18px',
//                 }}>How do I tell my patient about Freed?</Link>
//             </Box>
//         </div>
//     )
// }

// export default Record
