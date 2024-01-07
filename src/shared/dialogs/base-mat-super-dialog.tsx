'use client';
import { dialogHide } from '@/core/redux/slice/dialogz';
import { Cancel, Close } from '@mui/icons-material';
import { Dialog, DialogContent, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function MatDialogSuper({ children, dialogName, className }: any) {
  const dialogz = useSelector((state: any) => state?.dialogz || false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(dialogHide({ [dialogName]: false }));
  };

  return (
    <Fragment>
      <Dialog
        open={dialogz?.data[dialogName] || false}
        onClose={handleClose}
        // fullScreen={fullScreen}
        scroll={'body'}
        maxWidth="lg"
        PaperProps={{
          style: {
            maxHeight: '90vh',
            maxWidth: '93vw',
            width: '500px',
            overflow: 'visible',
            backdropFilter: 'blur(8px)',
            backgroundColor: ' #0A0836',
            color:'white',
            borderRadius:'10px',
            padding: '0px',
            margin: '5px',
          },
        }}
        // aria-labelledby="scroll-dialog-title"
        // aria-describedby="scroll-dialog-description"
      >
        <div className='relative w-full'>
          <IconButton aria-label="delete" size="small"  onClick={handleClose} 
            className='bg-orange-500 text-white hover:bg-red-600 absolute -top-3 -right-3 hover:animate-spin'>
            <Close className='text-sm'/>
          </IconButton>
        </div>
        <div className={`w-full p-3 ${className}`}>
          {children}
        </div>
        {/* <DialogContent></DialogContent> */}
      </Dialog>
    </Fragment>
  );
}
