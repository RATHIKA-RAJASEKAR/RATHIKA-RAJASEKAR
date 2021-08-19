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
import Divider from '@material-ui/core/Divider';



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
   <form>
    <div className="container w-full">
    <h1 className="text-lg font-bold text-center">Products Details</h1>
  <div><TextField id="standard-basic"  label="Product Name" required />

   <label className="text-lg" htmlFor=" offers">Category :</label>
  <select className="my-5 mx-5 p-2" name="subcategory" id="SubCategory" required>
  <option value="zero">Select SubCategory</option>
    <option value="one">Furniture</option>
    <option value="two">Electronic</option>
    <option value="three">Kitchen Sets</option>
    
  </select>
  
  </div></div>
  <div><TextField id="standard-basic" label="Item Code" required />
  <TextField id="standard-basic" label="Item Describtion" required /></div>
<Divider/>
<h2 className="text-center">Stock Details</h2>
<div><label className="text-lg" htmlFor=" offers">Unit :</label>
  <select className="my-5 mx-5 p-2" name="none" id="none" required>
  <option value="zero">none</option>
    <option value="one">one</option>
    <option value="two">two</option>
    <option value="three">three</option>
     </select> <label  className="text-lg"  htmlFor="Expiry">Expiry :</label>
  <select  className="my-5 mx-5 p-2" name="expiry" id="expiry" required>
   <option value="zero">none</option>
    <option value="days">Days</option>
    <option value="weeks">Weeks</option>
    <option value="months">Months</option>
    <option value="years">Years</option>
    
  </select></div>

 
  <Divider/>
<h2 className="text-center">Pricing</h2>
<div><TextField id="standard-basic" label="Sales Price" required />
  <TextField id="standard-basic" label="Purchase Price" required />
   <TextField id="standard-basic" label="GST"  required/></div>
  
  </form></div>
  );
}
