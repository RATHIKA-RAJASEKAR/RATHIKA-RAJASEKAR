import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../Pages/page.css';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
    <div className="container w-full">
    <h1 className="text-lg font-bold text-center">Customer Details</h1>
  <div><TextField id="standard-basic"  label="Customer Name" /><TextField id="standard-basic" label="Mobile Number" /></div>
  <div><TextField id="standard-basic" label="E-Mail Id" />
  <TextField id="standard-basic" label="Place" /></div>
  <div className="ml-3 " ><p className="mb-2 text-lg ">Customer Type : </p>
<div className="text-center "><input type="radio" id="B2B" name="cus-type" value=" B2B " />
 <label className="mx-2 my-2 " htmlFor="B2B">B2B</label></div>
 <div className="text-center "><input type="radio" id="B2C" name="cus-type" value=" B2C " />
 <label className="mx-2 my-2" htmlFor="B2C">B2C</label></div>
</div>

  
  <div> <TextareaAutosize  className="w-full mx-5 my-3 align-center"
       aria-label="maximum height"
       maxRows={4}
        placeholder="Address"
        name="address" type="text"   />

  </div>
  <div className="dropdownselect">
   <label className="text-lg" htmlFor=" offers">Offers :</label>
  <select className="my-5 mx-5 p-2" name="offers" id="offers">
  <option value="zero">none</option>
    <option value="one">10 %</option>
    <option value="two">20 %</option>
    <option value="three">30 %</option>
    
  </select>
  <TextField id="standard-basic" label="Offers" /></div>
  </div>
   </div>
  );
}
