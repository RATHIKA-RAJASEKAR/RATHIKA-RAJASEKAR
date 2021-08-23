import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { FiPlus } from "react-icons/fi";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import './page.css';



export default class Customer extends Component {
    constructor(props) {
        super(props);

        this.eventName = this.eventName.bind(this);
        this.eventNumber = this.eventNumber.bind(this);
        this.eventEmail = this.eventEmail.bind(this);
        this.eventPlace = this.eventPlace.bind(this);
        this.eventAddress = this.eventAddress.bind(this);
        this.eventOffer = this.eventOffer.bind(this);
        this.eventData = this.eventData.bind(this);
        this.submitFun = this.submitFun.bind(this);

        this.state = {
            name: '',
            number: '',
            email: '',
            place: '',
            address: '',
            offer: '',
            data: '',
            formData: []
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

    eventPlace(event) {
        this.setState({ place: event.target.value })
    }

    eventAddress(event) {
        console.log(event.target.value);
        this.setState({ address: event.target.value })
    }

    eventOffer(event) {
        console.log(event.target.value);
        this.setState({ offer: event.target.value })
    }

    eventData(event) {
        console.log(event.target.value);
        this.setState({ data: event.target.value })
    }
    submitFun() {
        let obj = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            place: this.state.place,
            address: this.state.address,
            offer: this.state.offer,
            data: this.state.data
        };
        console.log(" data");


        let formdata = this.state.formData;
        formdata.push(obj);
        this.setState({
            formData: formdata,
            name: '',
            number: '',
            email: '',
            place: '',
            address: '',
            offer: '',
            data : '',
        }, () => {
            console.log(this.state.formData);

        })
    }
    componentDidMount() {
        localStorage.setItem('suppliers', []);

    }


    render() {
        const {
            name, number, email,  place, address, offer, data
        } = this.state

        const disableButton = !(name && number && email && place && address && offer && data);

        return (
            <div className="container">
             <div  className="flex flex-row-reverse my-9 mx-5 ">
                <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
          <FiPlus/> ADD CUSTOMERS
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              <Typography className="justify ">
              <form>
                    <div className=" text-center t-50 r-50 w-full">
                          <h1 className="text-lg font-bold text-center">Customer Details</h1>
                          <div>
                            <TextField id="standard-basic" label="Customer Name" 
                           variant="outlined"
                           color="#063970"
                           name="name" type="text" value={this.state.name} onChange={this.eventName} required/>

                          <TextField id="standard-basic" label="Mobile Number"
                           variant="outlined"
                           type="text" 
                          name="number"
                          value={this.state.number} onChange={this.eventNumber} required /></div>

                          <div><TextField id="standard-basic" label="E-Mail Id"  variant="outlined"
                                 
                                 type="text" 
                                 name="email" value={this.state.email} onChange={this.eventEmail} required />

                            <TextField id="standard-basic" label="Place"  variant="outlined"
                                 
                                type="text" 
                                name="place"
                                value={this.state.place} onChange={this.eventPlace} required /></div>

                        {/* <div><p className="mb-2 text-lg ">Customer Type : </p>
                            <div className="text-center "><input type="radio" id="gstin" name="ctype" value=" gstin "
                              required />
                              <label className="mx-2 my-2 " htmlFor="gstin">gstin</label></div>

                            <div className="text-center "><input type="radio" id="B2C" name="ctype" value=" B2C "
                             variant="outlined"
                              
                             required />
                              <label className="mx-2 my-2" htmlFor="B2C">B2C</label></div>
                              <TextField id="standard-basic" label="GSTIN"  variant="outlined"
                                 
                                name="gstin" type="text" value={this.state.gstin} onChange={this.eventGstin} required />
                          </div> */}
                          <div>
                             <TextareaAutosize 
                            aria-label="maximum height"
                            maxRows={4}
                            placeholder="Address"
                            name="address" type="text"  variant="outlined"
                             
                            value={this.state.address} onChange={this.eventAddress} required />

                          </div>
                          <div >
                            <label className=" dropdown-name text-lg" htmlFor=" offer">Offer :</label>
                            <select className="dropdown-box my-5 mx-5 p-2" name="offer" id="offer"
                             variant="outlined"
                              
                             type="text" value={this.state.offer} onChange={this.eventOffer} required>
                              <option value="zero">none</option>
                              <option value="one">10 %</option>
                              <option value="two">20 %</option>
                              <option value="three">30 %</option>

                            </select>
                            <TextField id="standard-basic" label="data"  variant="outlined"
                                  name="data"
                                type="text" value={this.state.data} onChange={this.eventData} required /></div>

                         <button type="button" onClick={this.submitFun} value="submit" className="registerbtn" disabled={disableButton}>Submit</button>
                        </div>
                </form>

              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
                </div>
                <div className="items-center p-30">
                <div className="w-full  items-center mx-30 justify-center  ">
                <h1 className="text-center my-6 text-lg font-bold leading-normal">CUSTOMERS DETAILS</h1>
                <div className="bg-white shadow-md rounded my-6	mx-10">

                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="headerrow bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Mobile Number</th>
                                <th className="py-3 px-6 text-left">E-Mail ID</th>
                                <th className="py-3 px-6 text-left" >Place</th>
                                <th className="py-3 px-6 text-left">Address</th>
                                <th className="py-3 px-6 text-left">Offer</th>
                                <th className="py-3 px-6 text-left">Data</th>
                               
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">

                            {this.state.formData.map(formData =>

                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{formData.name}</td>
                                    <td className="py-3 px-6 text-left">{formData.number}</td>
                                    <td className="py-3 px-6 text-left">{formData.email}</td>
                                    <td className="py-3 px-6 text-left">{formData.place}</td>
                                    <td className="py-3 px-6 text-left">{formData.address}</td>
                                    <td className="py-3 px-6 text-left">{formData.offer}</td>
                                    <td className="py-3 px-6 text-left">{formData.data}</td>
                                    
                                </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}


