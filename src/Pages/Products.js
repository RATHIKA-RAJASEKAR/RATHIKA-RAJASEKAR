import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../Pages/page.css';

import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      button: {
        display: 'block',
        marginTop: theme.spacing(2),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    },
  }),
);

export default function Products() {
  const classes = useStyles();
 
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="container d-flex align-items-center flex-column">
    <div className="flex flex-row-reverse mx-2 px-3 my-5 ">
<button className="flex bg-blue-500 py-3 px-3 rounded hover:bg-blue-200"
color="blue"
buttonType="filled" type="button" size="regular"
rounded={false}
block={false}
iconOnly={false}
ripple="dark" onClick={handleOpen}>  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
</svg> 
      <span>Add Item</span> 
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
           <div>
                
   
   
    <form className={classes.root} noValidate autoComplete="off">
    <div class="container w-full">
    <form className={classes.root} noValidate autoComplete="off">
      <div><TextField
        id="outlined-secondary"
        label="Product Name"
        variant="outlined"
        color="secondary"
      />
     <TextField
        id="outlined-secondary"
        label="Category"
        variant="outlined"
        color="secondary"
      /></div>
     <div> 
       <TextField
        id="outlined-secondary"
        label="Item Code"
        variant="outlined"
        color="secondary"
      /></div>
         <TextareaAutosize 
       aria-label="maximum height"
       maxRows={4}
        placeholder="Item Describtion" />
      
       <TextField
        id="outlined-secondary"
        label="Pricing"
        variant="outlined"
        color="secondary"
      />
      
    </form>

  </div>
  </form>
   
    <button type="submit" class="registerbtn">Submit</button>
   

              </div></div>
        </Fade>
      </Modal>
    </div></div>
  );
}
