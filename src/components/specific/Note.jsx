import Box from '@mui/material/Box';
import { Typography, FormControlLabel, Checkbox, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PauseIcon from '@mui/icons-material/Pause';

const Note = () => {
  return (
    <div> <Box sx={{
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
          }} variant='p'>sdk</Typography>
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
      </Box></div>
  )
}

export default Note

