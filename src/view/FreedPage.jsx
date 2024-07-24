import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Link, FormControlLabel, Checkbox, } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MicNoneIcon from '@mui/icons-material/MicNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { FormControl, Select, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PauseIcon from '@mui/icons-material/Pause';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import Window from "../assets/image/windows-system-step1.png";
import Window_two from "../assets/image/windows-system-step2.png";
import Window_three from "../assets/image/windows-system-step3.png";
import Window_Four from "../assets/image/windows-system-step4.png";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { TextareaAutosize } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

//import MicPermissions from '../components/MicPermissions';
import DescriptionIcon from '@mui/icons-material/Description';

import { Button, TextField } from '@mui/material';
//import Record from '../components/layout/Record';
import Note from '../components/specific/Note'
const drawerWidth = 300;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const options = [
  { value: 'allnote', label: 'All Notes', icon: <StickyNote2Icon /> },
  { value: 'unreadnotes', label: 'Unread Notes', icon: <MailOutlineIcon /> },
  { value: 'trash', label: 'Trash', icon: <FolderDeleteIcon /> }
];
export default function FreedPage() {
  const [selectedOption, setSelectedOption] = useState('allnote');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{ position: "relative", background: "#1976d2", padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ color: "#fff", fontSize: "20px" }}>Freed</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', '& svg': { color: '#fff', filter: 'none' } }}>
          <AddIcon />
          <ChatBubbleOutlineIcon />
          <AccountCircleIcon />
        </Box>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <Box sx={{
          gridArea: '2 / 2 / 3 / 3',
          minHeight: '0px',
          overflowY: 'auto',
          transition: 'background 0.1s ease 0s',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          display: 'flex',
          height: 'calc(100vh - 50px)',
          width: '360px',
          flex: '0 0 360px',
        }}>
          <Box sx={{ width: '100%', overflow: 'hidden', }}>
            <Box sx={{
              padding: '0 16px 0 16px'
            }}>
              <Button sx={{ width: '100%', marginTop: '10px', }} variant="outlined" ><AddIcon sx={{ width: '20px', height: '20px', marginRight: '8px' }} />Start A Visit</Button>
            </Box>
            <Box sx={{
              padding: '0 16px 0 16px'
            }}>
              <TextField
                id="outlined-basic"
                label="Search notes by name"
                variant="outlined"
                fullWidth
                sx={{
                  marginTop: '16px',
                  '& .MuiInputBase-input': {
                    padding: '8.5px 14px',
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{
              height: 'calc(100vh - 154px)',
              overflow: 'auto',
            }}>
              <Box sx={{
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                display: 'flex',
                alignItems: 'center',
                padding: '8px 16px',
                position: 'sticky',
                top: 0,
                background: 'white',
                zIndex: 1,
                padding: '10px',
              }}>
                <FormControlLabel
                  sx={{
                    marginRight: '0',
                  }}
                  control={<Checkbox checked={false} />}
                />
                <FormControl fullWidth sx={{
                  '& .MuiOutlinedInput-root': { borderColor: 'transparent' },
                  '& .MuiSelect-select': {
                    padding: '0',
                  }
                }}>
                  <Select
                    id="notes-select"
                    value={selectedOption}
                    onChange={handleChange}
                    displayEmpty
                    fullWidth
                    sx={{
                      '& .MuiSelect-select': {
                        padding: '0',
                      },
                      '& fieldset': {
                        border: 'none',
                      },
                      '& .MuiSelect-select': {
                        minHeight: 'unset',
                        paddingTop: 0,
                        paddingBottom: 0,
                      },
                      '&:focus': {
                        backgroundColor: 'transparent',
                      },
                      '& .MuiInputBase-input': {
                        padding: '0',
                      },
                    }}
                    renderValue={() => {
                      if (selectedOption === '') {
                        return <Typography>Select an option</Typography>;
                      }
                      const selected = options.find(option => option.value === selectedOption);
                      return (
                        <>
                          <Typography>{selected.label}</Typography>
                        </>
                      );
                    }}
                  >
                    {options.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        <ListItemIcon>{option.icon}</ListItemIcon>
                        <Typography>{option.label}</Typography>
                      </MenuItem>
                    ))}
                  </Select>

                </FormControl>
              </Box>

              <Box >
                <Note/>
              </Box>
            </Box>
          </Box>

        </Box>


        <Box sx={{
          gridArea: '2 / 3 / 3 / 4',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          height: 'calc(100vh - 50px)',
          width: '100%',
          position: 'relative',
        }}>

          <Box sx={{
            width: "340px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}>

            {/* capture visit model */}
            <Box style={{ display: '', }}>
                <Button sx={{
                    transition:
                        'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, ' +
                        'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, ' +
                        'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    borderRadius: '24px',
                    padding: '0px 16px',
                    minWidth: '48px',
                    width: 'auto',
                    height: '48px',
                    zIndex: 1050,
                    boxShadow:
                        'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, ' +
                        'rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, ' +
                        'rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
                    color: 'rgba(0, 0, 0, 0.87)',
                    backgroundColor: 'rgb(224, 224, 224)',
                    margin: '8px',
                }}>
                    <MicNoneIcon />CAPTURE CONVERSATION</Button>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: '15px', }}>
                    <Typography sx={{
                        textAlign: 'center', display: 'flex', width: '130px', justifyContent: 'center', gap: '10px',
                    }}>
                        <span
                            style={{
                                borderBottom: '1px solid #000',
                                display: 'inline-block',
                                lineHeight: '0.1em',
                                margin: '10px 0 17px',
                                width: '50%',
                            }}
                        />
                        or
                        <span
                            style={{
                                borderBottom: '1px solid #000',
                                display: 'inline-block',
                                lineHeight: '0.1em',
                                margin: '10px 0 17px',
                                width: '50%',
                            }}
                        />
                    </Typography>
                </Box>

                <Box sx={{
                    marginBottom: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px',
                }}>
                    <Typography sx={{ color: '#6b6b6b', fontSize: '14px', }}>Drag in or</Typography>

                    <Button
                        sx={{
                            background: 'transparent',
                            boxShadow: 'none',
                            color: '#1976d2',
                            padding: '0px',
                            width: 'auto',
                            display: 'contents',
                            textTransform: 'capitalize',
                            '&:hover': {
                                background: 'none',
                                boxShadow: 'none',
                            },
                            '& svg': {
                                display: 'none',
                            },

                        }}
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload
                        <VisuallyHiddenInput type="file" />
                    </Button>

                    <Typography sx={{ color: '#6b6b6b', fontSize: '14px', }}>a pre-recorded visit.</Typography>
                </Box>
                <Link sx={{
                    fontSize: '18px',
                }}>How do I tell my patient about Freed?</Link>
            </Box>
            {/* capture visit model */}


            {/* End visit model */}
            <Box style={{ display: 'none', }}>
              <Typography sx={{
                color: '#000000de',
                fontSize: '22px',
                fontWeight: '500',
                marginBottom: '15px',
              }} variant='h1'>Paused</Typography>
              <Typography sx={{
                color: '#000000de',
                fontSize: '16px',
                fontWeight: '500',
              }} variant='p'>Press End Visit to generate your note, or play to continue.</Typography>

              <Box sx={{
                marginTop: '15px',
              }}>
                <Button
                  sx={{
                    transition:
                      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, ' +
                      'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, ' +
                      'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    borderRadius: '24px',
                    padding: '0px 16px',
                    minWidth: '48px',
                    width: 'auto',
                    height: '48px',
                    zIndex: 1050,
                    boxShadow:
                      'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, ' +
                      'rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, ' +
                      'rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
                    color: 'rgba(0, 0, 0, 0.87)',
                    backgroundColor: 'rgb(224, 224, 224)',
                    margin: '8px',
                  }}
                  onClick={handleClickOpen}
                >
                  <MicNoneIcon /> END VISIT
                </Button>
                <Button sx={{
                  transition:
                    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, ' +
                    'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, ' +
                    'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  borderRadius: '24px',
                  padding: '0px 16px',
                  minWidth: '48px',
                  width: 'auto',
                  height: '48px',
                  zIndex: 1050,
                  boxShadow:
                    'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, ' +
                    'rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, ' +
                    'rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
                  color: 'rgba(0, 0, 0, 0.87)',
                  backgroundColor: 'rgb(224, 224, 224)',
                  margin: '8px',
                }}>
                  <PlayArrowIcon /></Button>
              </Box>


              <Box sx={{
                marginTop: '35px',
              }}>
                <Link sx={{
                  fontSize: '18px',
                }}>How do I tell my patient about Freed?</Link>
              </Box>
            </Box>
            {/* End visit model */}




          </Box>

          {/* ============================== End visit model ============================== */}
          <Box style={{ display: 'none', }} sx={{ padding: '32px', }}>
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
          {/* ============================== End visit model ============================== */}



          {/* ============================ Visit card Summary =============================== */}

          <Box style={{ display: 'none', }} sx={{

            backgroundColor: 'rgb(255, 255, 255)',
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
            position: 'relative',
            transition: 'margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            overflowAnchor: 'none',
            borderRadius: '0px',
            margin: '25px',
            padding: '16px',
            width: 'calc(100% - 100px)',

          }}>
            <Typography
              sx={{
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '23px',
                letterSpacing: '0.00938em',
                color: 'rgba(0, 0, 0, 0.87)',
                boxSizing: 'border-box',
                cursor: 'text',
                display: 'inline-flex',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                position: 'relative',
                gap: '8px',
              }}
            >Visit Summary <ErrorOutlineIcon sx={{
              color: '#0000008a',
              width: '15px',
              height: '15px',
            }} /></Typography>


            <Box sx={{
              width: '100%',
              marginTop: '35px',
              marginBottom: '15px',
              '& textarea': {
                width: 'calc(100% - 40px)',
                height: 'auto !important',
                resize: 'none',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                letterSpacing: '0.00938em',
                color: 'rgba(0, 0, 0, 0.87)',
                padding: '16px',
                borderRadius: '4px',
              },
            }}>
              <TextareaAutosize
                id="w3review"
                name="w3review"
                aria-label="empty textarea"
                rows={4}
                defaultValue="At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies."
              />
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Box sx={{ display: 'flex', gap: '10px', }}>
                <ThumbUpOffAltIcon sx={{
                  color: '#0000008a',
                  width: '25px',
                  height: '25px',
                  cursor: 'pointer',
                }} />
                <ThumbDownOffAltIcon sx={{
                  color: '#0000008a',
                  width: '25px',
                  height: '25px',
                  cursor: 'pointer',
                }} />
              </Box>
              <Box>
                <Button sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  border: '1px solid #1976d2',
                }}> <ContentCopyIcon sx={{ width: '18px', height: '18px' }} /> COPY</Button>
              </Box>
            </Box>
          </Box>

          {/* ============================ Visit card Summary =============================== */}

        </Box>

      </Box>

      <Box>
        <Dialog
          sx={{
            width: '-webkit-fill-available',
            '& form': {
              width: '-webkit-fill-available',
            },
          }}
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          {/* <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          ></IconButton> */}

          <CloseIcon
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: 'gray',
              cursor: 'pointer',
            }}
            onClick={handleClose}
          />
          <DialogTitle>Thank you for healing another human</DialogTitle>

          <DialogContent>
            <DialogContentText>
              Who was the patient for this visit?
            </DialogContentText>
            <TextField
              autoFocus

              margin="dense"
              id="name"
              name="email"
              label="Patient name"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button sx={{
              color: '#000000de',
            }} onClick={handleClose}>SKIP</Button>
            <Button sx={{
              color: '#00000042',
            }} type="submit">CONFIRM NAME</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
