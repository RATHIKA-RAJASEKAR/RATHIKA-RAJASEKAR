import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../Pages/page.css';
import TextField from '@material-ui/core/TextField';

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
  }),
);

export default function Customer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <span>Add Customer</span> 
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
    <h1>Customer Details</h1>
  <div><TextField id="standard-basic" placeholder="Customer Name" label="Customer Name" /></div>
  <div><TextField id="standard-basic" label="Mobile Number" /></div>
  <div><TextField id="standard-basic" label="E-Mail Id" /></div>

  <div><TextField id="standard-basic" label="Place" /></div>
  <div><TextField id="standard-basic" label="Address" /></div>
<div> <label for="Credit Limit">Credit Limit:</label>
  <select name="Limit" id="Limit">
    <option value="days">Days</option>
    <option value="weeks">Weeks</option>
    <option value="months">Months</option>
    
  </select></div>

  <div><TextField id="standard-basic" label="Offers" /></div>
  </div>
  </form>
   
    <button type="submit" class="registerbtn">Submit</button>
   

              </div></div>
        </Fade>
      </Modal>
    </div></div>
  );
}
