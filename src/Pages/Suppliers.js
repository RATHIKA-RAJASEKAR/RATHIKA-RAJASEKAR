import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Modal from './Modal.js';

export default class Suppliers extends Component {
    constructor(props) {
        super(props);

        this.eventName = this.eventName.bind(this);
        this.eventNumber = this.eventNumber.bind(this);
        this.eventEmail = this.eventEmail.bind(this);
        this.eventGstin = this.eventGstin.bind(this);
        this.eventPlace = this.eventPlace.bind(this);
        this.eventAddress = this.eventAddress.bind(this);
        this.eventLimit = this.eventLimit.bind(this);
        this.eventPeriod = this.eventPeriod.bind(this);
        this.submitFun = this.submitFun.bind(this);


        this.state = {
            name: '',
            number:'',
            email: '',
            gstin:'',
            place: '',
            address: '',
            limit:'',
            period: '',

         formData:[]   
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
        console.log(event.target.value);
        this.setState({ address: event.target.value })
        
    } 
     eventLimit(event) {
        console.log(event.target.value);
        this.setState({ limit: event.target.value })
        
    } 
     eventPeriod(event) {
        console.log(event.target.value);
        this.setState({ period: event.target.value })
        
    } 



    submitFun() {
  let obj = {
    name: this.state.name,
    number: this.state.number,
    email:this.state.email,
    gstin: this.state.gstin,
    place: this.state.place,
    address :this.state.address,
    limit: this.state.limit,
    period :this.state.period
  };
   console.log(" data");


   let formdata=this.state.formData;
   formdata.push(obj);
   this.setState({ formData: formdata,
            name: '',
            number:'',
            email: '',
            gstin:'',
            place: '',
            address: '',
            limit:'',
            period: '',   },()=>{
    console.log(this.state.formData);

    })

  

  /*console.log(obj);
  array.push(obj);
  localStorage.setItem('suppliers', JSON.stringify(array));
  console.log(localStorage.getItem('suppliers'));*/
}


   componentDidMount(){
    localStorage.setItem('suppliers',[]);

   }


   render() {
    const {
        name,number,email,gstin,place,address,limit,period,formData
          }=this.state

    const disableButton = !( name && number && email && gstin && place && address && limit && period );      

        return (
  


  <div className="container">
    <form>
    <div className=" text-center container w-full">
    <h1 className=" my-8 text-lg font-bold">SUPPLIER DETAILS</h1>
          <div>
         
          <TextField
        label="Supplier Name"
        variant="outlined"
        color="secondary"
        name="name" type="text"  value={this.state.name} onChange={this.eventName} required 
      />
     <TextField
        label="Mobile Number"
        variant="outlined"
        color="secondary"
        name="number" type="text" value={this.state.number} onChange={this.eventNumber} required     /></div>
       <div><TextField
        id="mail"
        label="E-Mail Id"
        variant="outlined"
        color="secondary"
        name="email" type="text" value={this.state.email} onChange={this.eventEmail} required 
      />
       
       <TextField
        id="gstin"
        label="GSTIN"
        variant="outlined"
        color="secondary"
        name="gstin" type="text" value={this.state.gstin} onChange={this.eventGstin} required  
      /></div>
       <div> 
       <TextField
        id="outlined-secondary"
        label="Place of Supply"
        variant="outlined"
        color="secondary"
        name="place" type="text" value={this.state.place} onChange={this.eventPlace}  required 
      /> <TextareaAutosize 
       aria-label="maximum height"
       maxRows={4}
        placeholder="Address"
        name="address" type="text" value={this.state.address} onChange={this.eventAddress} required   />

      </div>
      <div> <label className="text-lg"  htmlFor="Credit Limit">Credit Limit:</label>
  <select className="my-5 mx-5 p-2" name="Limit" id="Limit"  value={this.state.limit} onChange={this.eventLimit} >
    <option value="days">Days</option>
    <option value="weeks">Weeks</option>
    <option value="months">Months</option>
    
  </select>
       <TextField
        id="outlined-secondary"
        label="CreditPeriod"
        variant="outlined"
        color="secondary"
        name="period" type="text" value={this.state.period} onChange={this.eventPeriod}  required  /></div>
      <div>
       <button type="button" onClick={this.submitFun} value ="submit" className="registerbtn" disabled={disableButton}>Submit</button>

   
      </div>
      </div>
  </form>
   

  <div>
    <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </main>
  </div> 
   <h1 className="text-center my-6 text-lg font-bold">DETAILS</h1>
   <div className="tabledetails text-center">
  
<table className="mytable text-center">
<thead>
    <tr className="headerrow">
    <th>Name</th>
    <th>Mobile Number</th>
    <th>E-Mail ID</th>
    <th>GSTIN</th>
    <th>Place</th>
    <th>Address</th>
    <th>Credit Limit</th>
    <th>Credit Period</th>
   </tr>
   </thead>
   <tbody>

    {this.state.formData.map(formData =>

   <tr className="valuerow">    
    <td>{formData.name}</td>
    <td>{formData.number}</td>
    <td>{formData.email}</td>
    <td>{formData.gstin}</td>
    <td>{formData.place}</td>
    <td>{formData.address}</td>
    <td>{formData.limit}</td>
    <td>{formData.period}</td>
      </tr>
      )}
      </tbody>
</table>
  
   
   </div>

    </div>

   
   );

    }
}


