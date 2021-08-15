import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


export default class Suppliers extends Component {

    DATA;

constructor(props) {
        super(props);

        this.eventName = this.eventName.bind(this);
        this.eventNumber = this.eventNumber.bind(this);
        this.eventEmail = this.eventEmail.bind(this);
        this.eventGstin = this.eventGstin.bind(this);
        this.eventPlace = this.eventPlace.bind(this);
        this.eventAddress = this.eventAddress.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            name: '',
            number:'',
            email: '',
            gstin:'',
            place: '',
            address: ''
        }


    }
    


    // Event handlers
    eventName(event) {
        this.setState({ name: event.target.value })
    }
     eventNumber(event) {
        this.setState({ number: event.target.value })
    }

    eventEmail(event) {
        this.setState({ email: event.target.value })
    }

    eventGstin(event) {
        this.setState({ gstin: event.target.value })
    }

    eventPlace(event) {
      this.setState({ place: event.target.value })
    }   
     eventAddress(event) {
        this.setState({ address: event.target.value })
    } 

    onFormSubmit(event) {
      event.preventDefault()
    }


    componentDidMount() {
        this.DATA = JSON.parse(localStorage.getItem('suppliers_form'));

        setMyArray(oldArray => [...oldArray, newElement]);
    

        if (localStorage.getItem('suppliers_form')) {
            this.setState({
                name: this.DATA.name,
                number: this.DATA.number,
                email: this.DATA.email,
                gstin: this.DATA.gstin,
                place: this.DATA.place,
                address: this.DATA.address
            })
        } else {
            this.setState({
                name: '',
                number:'',
                email: '',
                gstin: '',
                place: '',
                address:''
            })
        }


  const suppliersForm = () => {
  let valueObj = {
    name: name,
    number: number,
    mail:mail,
    gstin: gstin,
    place: place,
    address:address
  };
  myArray.push(valueObj);
  localStorage.setItem('myArray', JSON.stringify(myArray));
  console.log(localStorage.getItem('myArray'));
}

       
        var suppliers = localStorage.getItem('suppliers_form');
        localStorage.getItem('suppliers_form');
      var usestate = { name:" ",number: " ",  email:" " , gstin:" ", place:" ", address:" "};
    }


    


   render() {
        return (
   
  <div className="form ">
   
    <form onSubmit={this.onFormSubmit} >
    <div className=" text-center container w-full">
    <h1 className=" my-8 text-lg font-bold">SUPPLIER DETAILS</h1>
          <div>
         
          <TextField
        label="Supplier Name"
        variant="outlined"
        color="secondary"
        name="name" type="text"   onChange={this.eventName} required 
      /></div>
      <div>
     <TextField
        label="Mobile Number"
        variant="outlined"
        color="secondary"
        name="number" type="text"  onChange={this.eventNumber} required     /></div>
     <div> 
       <TextField
        id="mail"
        label="E-Mail Id"
        variant="outlined"
        color="secondary"
        name="email" type="text"  onChange={this.eventEmail} required 
      /></div>
       <div> 
       <TextField
        id="gstin"
        label="GSTIN"
        variant="outlined"
        color="secondary"
        name="gstin" type="text"  onChange={this.eventGstin} required  
      /></div>
       <div> 
       <TextField
        id="outlined-secondary"
        label="Place of Supply"
        variant="outlined"
        color="secondary"
        name="place" type="text"  onChange={this.eventPlace}  required 
      /></div>
        <div> <TextareaAutosize 
       aria-label="maximum height"
       maxRows={4}
        placeholder="Address"
        name="address" type="text" onChange={this.eventAddress}required   />

      </div>
      <div className="text-center my-5" >
       <label for="Credit Period">Credit Period:</label>
  <select className=" inline" name="Period" id="Period">
   <option value="none">None</option>
    <option value="days">Days</option>
    <option value="weeks">Weeks</option>
    <option value="months">Months</option>
    
  </select>
  </div>
  <div> 
       <TextField
        id="outlined-secondary"
        label="Credit Limit"
        variant="outlined"
        color="secondary"
        name="limit" type="text"  onChange={this.eventlimit}  required 
      /></div>

      <div>
       <button type="submit" value ="submit" class="registerbtn">Submit</button>

   
      </div>
      </div>
  </form>
   <div></div>

   <h1>DETAILS</h1>
  <p className="mb-20" suppliersForm> {suppliersForm} </p>
       </div>

   
   );
    }
}


