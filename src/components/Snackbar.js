import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar({open, setOpen, mode}) {




  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={`Format Successfully Changed to ${mode.toUpperCase()} !`}
        action={action}
      />
    </div>
  );
}
