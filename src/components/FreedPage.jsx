import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Typography, Divider, Link, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IndeterminateCheckbox from '../components/SideBar';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MicNoneIcon from '@mui/icons-material/MicNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PauseIcon from '@mui/icons-material/Pause';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';


import DescriptionIcon from '@mui/icons-material/Description';

import { Button, TextField } from '@mui/material';

const drawerWidth = 300;

const options = [
  { value: 'allnote', label: 'All Notes', icon: <PauseIcon /> },
  { value: 'unreadnotes', label: 'Unread Notes', icon: <PauseIcon /> },
  { value: 'trash', label: 'Trash', icon: <PauseIcon /> }
];
export default function FreedPage() {
  const [selectedOption, setSelectedOption] = useState('allnote'); // Setting 'work' as default

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
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#1976d214'
                  },
                }}>
                  <FormControlLabel
                    sx={{
                      marginRight: '0',
                    }}
                    control={<Checkbox checked={false} />}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    gap: '5px',
                  }}>
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>Unknown</Typography>
                    <Typography sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>07/18/24 3:46pm (1 min)</Typography>
                    <Typography sx={{
                      color: '#686d73',
                      fontSize: '16px',
                      fontWeight: '400',
                    }} variant='p'>Paused</Typography>
                  </Box>
                  <DeleteIcon sx={{ color: '#686d73' }} />
                  < PauseIcon />
                </Box>

                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#1976d214'
                  },
                }}>
                  <FormControlLabel
                    sx={{
                      marginRight: '0',
                    }}
                    control={<Checkbox checked={false} />}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    gap: '5px',
                  }}>
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>Unknown</Typography>
                    <Typography sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>07/18/24 3:46pm (1 min)</Typography>
                    <Typography sx={{
                      color: '#686d73',
                      fontSize: '16px',
                      fontWeight: '400',
                    }} variant='p'>Paused</Typography>
                  </Box>
                  <DeleteIcon sx={{ color: '#686d73' }} />
                  < PauseIcon />
                </Box>

                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#1976d214'
                  },
                }}>
                  <FormControlLabel
                    sx={{
                      marginRight: '0',
                    }}
                    control={<Checkbox checked={false} />}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    gap: '5px',
                  }}>
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>Unknown</Typography>
                    <Typography sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>07/18/24 3:46pm (1 min)</Typography>
                    <Typography sx={{
                      color: '#686d73',
                      fontSize: '16px',
                      fontWeight: '400',
                    }} variant='p'>Paused</Typography>
                  </Box>
                  <DeleteIcon sx={{ color: '#686d73' }} />
                  < PauseIcon />
                </Box>

                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#1976d214'
                  },
                }}>
                  <FormControlLabel
                    sx={{
                      marginRight: '0',
                    }}
                    control={<Checkbox checked={false} />}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    gap: '5px',
                  }}>
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>Unknown</Typography>
                    <Typography sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>07/18/24 3:46pm (1 min)</Typography>
                    <Typography sx={{
                      color: '#686d73',
                      fontSize: '16px',
                      fontWeight: '400',
                    }} variant='p'>Paused</Typography>
                  </Box>
                  <DeleteIcon sx={{ color: '#686d73' }} />
                  < PauseIcon />
                </Box>

                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#1976d214'
                  },
                }}>
                  <FormControlLabel
                    sx={{
                      marginRight: '0',
                    }}
                    control={<Checkbox checked={false} />}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    gap: '5px',
                  }}>
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>Unknown</Typography>
                    <Typography sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>07/18/24 3:46pm (1 min)</Typography>
                    <Typography sx={{
                      color: '#686d73',
                      fontSize: '16px',
                      fontWeight: '400',
                    }} variant='p'>Paused</Typography>
                  </Box>
                  <DeleteIcon sx={{ color: '#686d73' }} />
                  < PauseIcon />
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#1976d214'
                  },
                }}>
                  <FormControlLabel
                    sx={{
                      marginRight: '0',
                    }}
                    control={<Checkbox checked={false} />}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    gap: '5px',
                  }}>
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>Unknown</Typography>
                    <Typography sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>07/18/24 3:46pm (1 min)</Typography>
                    <Typography sx={{
                      color: '#686d73',
                      fontSize: '16px',
                      fontWeight: '400',
                    }} variant='p'>Paused</Typography>
                  </Box>
                  <DeleteIcon sx={{ color: '#686d73' }} />
                  < PauseIcon />
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#1976d214'
                  },
                }}>
                  <FormControlLabel
                    sx={{
                      marginRight: '0',
                    }}
                    control={<Checkbox checked={false} />}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    gap: '5px',
                  }}>
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>Unknown</Typography>
                    <Typography sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>07/18/24 3:46pm (1 min)</Typography>
                    <Typography sx={{
                      color: '#686d73',
                      fontSize: '16px',
                      fontWeight: '400',
                    }} variant='p'>Paused</Typography>
                  </Box>
                  <DeleteIcon sx={{ color: '#686d73' }} />
                  < PauseIcon />
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#1976d214'
                  },
                }}>
                  <FormControlLabel
                    sx={{
                      marginRight: '0',
                    }}
                    control={<Checkbox checked={false} />}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    gap: '5px',
                  }}>
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>Unknown</Typography>
                    <Typography sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>07/18/24 3:46pm (1 min)</Typography>
                    <Typography sx={{
                      color: '#686d73',
                      fontSize: '16px',
                      fontWeight: '400',
                    }} variant='p'>Paused</Typography>
                  </Box>
                  <DeleteIcon sx={{ color: '#686d73' }} />
                  < PauseIcon />
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#1976d214'
                  },
                }}>
                  <FormControlLabel
                    sx={{
                      marginRight: '0',
                    }}
                    control={<Checkbox checked={false} />}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    gap: '5px',
                  }}>
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>Unknown</Typography>
                    <Typography sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>07/18/24 3:46pm (1 min)</Typography>
                    <Typography sx={{
                      color: '#686d73',
                      fontSize: '16px',
                      fontWeight: '400',
                    }} variant='p'>Paused</Typography>
                  </Box>
                  <DeleteIcon sx={{ color: '#686d73' }} />
                  < PauseIcon />
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#1976d214'
                  },
                }}>
                  <FormControlLabel
                    sx={{
                      marginRight: '0',
                    }}
                    control={<Checkbox checked={false} />}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    gap: '5px',
                  }}>
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>Unknown</Typography>
                    <Typography sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>07/18/24 3:46pm (1 min)</Typography>
                    <Typography sx={{
                      color: '#686d73',
                      fontSize: '16px',
                      fontWeight: '400',
                    }} variant='p'>Paused</Typography>
                  </Box>
                  <DeleteIcon sx={{ color: '#686d73' }} />
                  < PauseIcon />
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#1976d214'
                  },
                }}>
                  <FormControlLabel
                    sx={{
                      marginRight: '0',
                    }}
                    control={<Checkbox checked={false} />}
                  />
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    gap: '5px',
                  }}>
                    <Typography sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>Unknown</Typography>
                    <Typography sx={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: '#000000de',
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    }} variant='p'>07/18/24 3:46pm (1 min)</Typography>
                    <Typography sx={{
                      color: '#686d73',
                      fontSize: '16px',
                      fontWeight: '400',
                    }} variant='p'>Paused</Typography>
                  </Box>
                  <DeleteIcon sx={{ color: '#686d73' }} />
                  < PauseIcon />
                </Box>

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
            <Box style={{ display: 'none', }}>
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
              <Typography sx={{ color: '#6b6b6b', fontSize: '14px', marginBottom: '25px' }}>Drag in or<Link sx={{ px: '4px', }}>Upload</Link>a pre-recorded visit.</Typography>
              <Link sx={{
                fontSize: '18px',
              }}>How do I tell my patient about Freed?</Link>
            </Box>
            {/* capture visit model */}


            {/* End visit model */}
            <Box style={{ display: 'block', }}>
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
