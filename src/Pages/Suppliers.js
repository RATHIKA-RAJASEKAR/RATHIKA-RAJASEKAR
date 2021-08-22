import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { FiPlus } from "react-icons/fi";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


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
            number: '',
            email: '',
            gstin: '',
            place: '',
            address: '',
            limit: '',
            period: '',
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
            email: this.state.email,
            gstin: this.state.gstin,
            place: this.state.place,
            address: this.state.address,
            limit: this.state.limit,
            period: this.state.period
        };
        console.log(" data");


        let formdata = this.state.formData;
        formdata.push(obj);
        this.setState({
            formData: formdata,
            name: '',
            number: '',
            email: '',
            gstin: '',
            place: '',
            address: '',
            limit: '',
            period: '',
        }, () => {
            console.log(this.state.formData);

        })
    }
    componentDidMount() {
        localStorage.setItem('suppliers', []);

    }


    render() {
        const {
            name, number, email, gstin, place, address, limit, period
        } = this.state

        const disableButton = !(name && number && email && gstin && place && address && limit && period);

        return (
            <div className="container">
             <div  className="flex flex-row-reverse my-9 mx-5 ">
                <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
          <FiPlus/> ADD SUPPLIERS
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
                        <h1 className=" my-8 text-lg font-bold">SUPPLIER DETAILS</h1>
                        <div>

                            <TextField
                                label="Supplier Name"
                                variant="outlined"
                                color="secondary"
                                name="name" type="text" value={this.state.name} onChange={this.eventName} required />
                            <TextField
                                label="Mobile Number"
                                variant="outlined"
                                color="secondary"
                                name="number" type="text" value={this.state.number} onChange={this.eventNumber} required /></div>
                        <div>
                            <TextField
                            id="mail"
                            label="E-Mail Id"
                            variant="outlined"
                            color="secondary"
                            name="email" type="text" value={this.state.email} onChange={this.eventEmail} required  />
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
                                name="place" type="text" value={this.state.place} onChange={this.eventPlace} required />
                            <TextareaAutosize
                                aria-label="maximum height"
                                maxRows={4}
                                placeholder="Address"
                                name="address" type="text" value={this.state.address} onChange={this.eventAddress} required />

                        </div>
                        <div> <label className="dropdown-name text-lg" htmlFor="Credit Limit">Credit Limit:</label>
                            <select className="dropdown-box my-5 mx-5 p-2" name="Limit" id="Limit" value={this.state.limit} onChange={this.eventLimit} >
                                <option className="g-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm" value="days">Days</option>
                                <option className="d-option my-1 mx-3 p-2" value="weeks">Weeks</option>
                                <option className="d-option my-1 mx-3 p-2" value="months">Months</option>

                            </select>
                            <TextField
                                id="outlined-secondary"
                                label="CreditPeriod"
                                variant="outlined"
                                color="secondary"
                                name="period" type="text" value={this.state.period} onChange={this.eventPeriod} required /></div>
                        <div>
                            <button type="button" onClick={this.submitFun} value="submit" className="registerbtn" disabled={disableButton}>Submit</button>
                        </div>
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
                <h1 className="text-center my-6 text-lg font-bold leading-normal">SUPPLIERS DETAILS</h1>
                <div className="bg-white shadow-md rounded my-6	mx-10">

                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="headerrow bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Mobile Number</th>
                                <th className="py-3 px-6 text-left">E-Mail ID</th>
                                <th className="py-3 px-6 text-left">GSTIN</th>
                                <th className="py-3 px-6 text-left" >Place</th>
                                <th className="py-3 px-6 text-left">Address</th>
                                <th className="py-3 px-6 text-left">Credit Limit</th>
                                <th className="py-3 px-6 text-left">Credit Period</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">

                            {this.state.formData.map(formData =>

                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{formData.name}</td>
                                    <td className="py-3 px-6 text-left">{formData.number}</td>
                                    <td className="py-3 px-6 text-left">{formData.email}</td>
                                    <td className="py-3 px-6 text-left">{formData.gstin}</td>
                                    <td className="py-3 px-6 text-left">{formData.place}</td>
                                    <td className="py-3 px-6 text-left">{formData.address}</td>
                                    <td className="py-3 px-6 text-left">{formData.limit}</td>
                                    <td className="py-3 px-6 text-left">{formData.period}</td>
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


