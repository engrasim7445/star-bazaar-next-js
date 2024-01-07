
'use client';
import { dialogHide } from '@/core/redux/slice/dialogz';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const styles = {
  backdrop: {
    backgroundColor: 'blue[100]',
    color: 'blue[600]',
  },
  action:{
    justifyContent:'inherit',
  }
};

export function MatDialog({children, dialogName}: any) {
  const dialogz = useSelector((state: any) => state?.dialogz || false);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(dialogHide({[dialogName]: false}));
  };

  // const descriptionElementRef = useRef(null as any);
  // useEffect(() => {
  //   if (open) {
  //     const { current: descriptionElement } = descriptionElementRef;
  //     if (descriptionElement !== null) {
  //       descriptionElement.focus();
  //     }
  //   }
  // }, [open]);

  return (
    <Fragment>
      <Dialog
        open={dialogz?.data[dialogName] || false}
        onClose={handleClose}
        scroll={'paper'}
        // slotProps={{
        //   backdrop: {
        //     classes: {
        //       root: styles.backdrop
        //      }
        //   } 
        //  }}
         PaperProps={{
          style: {
            maxHeight: "90vh",
            maxWidth: "95vw"
          }
         }}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={'paper' === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            // ref={descriptionElementRef}
            tabIndex={-1}
          >
            {children}
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </Fragment>
  );
}