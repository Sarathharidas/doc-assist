
import React from 'react'

const VisitSummary = () => {
    return (
        <div>
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
           </div>
    );
}

export default VisitSummary

