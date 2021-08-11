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
import React, { useState, useEffect } from 'react'



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

export default function Suppliers() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  const [suppliers, setSuppliers] = useState(ALL_SUPPLIERS)


 const [value, setValue] = React.useState( '');
 const [number, setNumber] =  React.useState( '');
 const [mail, setMail] = React.useState( '');
 const [gstin, setGstin] =  React.useState( '');
 const [place, setPlace] =  React.useState( '');
 const [address, setAddress] =  React.useState( '');

const handleName = event => {
  console.log('Name ', event.target.value)
  setName(event.target.value)
}

const handleNumber = event => {
  console.log('Number ', event.target.value)
  setNumber(event.target.value)
}
const handleSubmitForm = event => {
  event.preventDefault()
  // do something when submitting the form
}
const handleSubmitForm = event => {
  event.preventDefault()
  //check whether the name is not empty and the amount is not negative
  if (name !== '' && number > 0) {
    // single expense object
    const suppliers = { name, number }
    // do not override previous values in the array
    // use spread operator to access previous values
    setSuppliers([...suppliers, supplier])

    // clean input fields
    setName('')
    setAmount('')
  } else {
    console.log('Invalid expense name or the amount')
  }
}
const ALL_SUPPLIERS = localStorage.getItem('suppliers')
  ? JSON.parse(localStorage.getItem('suppliers'))
  : []

 useEffect(() => {
  localStorage.setItem('suppliers', JSON.stringify(suppliers))
}, [suppliers])
  
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
      <span>Add Suppliers</span> 
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
          <div>
          <TextField
        id="name"
        label="Supplier Name"
        variant="outlined"
        color="secondary"
        value={name} type="text" onChange={onChange}
      /></div>
      <div>
     <TextField
        id="number"
        label="Mobile Number"
        variant="outlined"
        color="secondary"
        value={number} type="number" onChange={onChange}
      /></div>
     <div> 
       <TextField
        id="mail"
        label="E-Mail Id"
        variant="outlined"
        color="secondary"
        value={mail} type="text" onChange={onChange}
      /></div>
       <div> 
       <TextField
        id="gstin"
        label="GSTIN"
        variant="outlined"
        color="secondary"
        value={gstin} type="text" onChange={onChange}
      /></div>
       <div> 
       <TextField
        id="outlined-secondary"
        label="Place of Supply"
        variant="outlined"
        color="secondary"
        value={place} type="text" onChange={onChange}
      /></div>
        <div> <TextareaAutosize 
       aria-label="maximum height"
       maxRows={4}
        placeholder="Address"
        value={address} type="text" onChange={onChange} />

      </div><div>
      </div>
      </div>
  </form>
   
    <button type="submit" class="registerbtn">Submit</button>
   

              </div></div>
        </Fade>
      </Modal>
    </div>
    <div className="content text-center my-5 ">
<h1 className="text-lg"> Suppliers Details</h1>
const List = ({ suppliers }) => (
  <div>
    <ListGroup>
      {suppliers.map(item => (
        <ListGroupItem key={item.id}>
          {item.name} -  {item.number}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)
</div>
    </div>

   
  );
}
