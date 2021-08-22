import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { FiPlus } from "react-icons/fi";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


export default class Products extends Component {
  constructor(props) {
    super(props);

    this.eventName = this.eventName.bind(this);
    this.eventCategory = this.eventCategory.bind(this);
    this.eventIcode = this.eventIcode.bind(this);
    this.eventIdesc = this.eventIdesc.bind(this);
    this.eventUnit = this.eventUnit.bind(this);
    this.eventExpiry = this.eventExpiry.bind(this);
    this.eventSprice = this.eventSprice.bind(this);
    this.eventPprice = this.eventPprice.bind(this);
    this.submitFun = this.submitFun.bind(this);

    this.state = {
      name: '',
      category: '',
      icode: '',
      idesc: '',
      unit: '',
      expiry: '',
      sprice: '',
      pprice: '',
      formData: []
    }
  }
  // Event handlers
  eventName(event) {
    this.setState({ name: event.target.value })
  }
  eventCategory(event) {
    this.setState({ category: event.target.value })
  }

  eventIcode(event) {
    this.setState({ icode: event.target.value })
  }

  eventIdesc(event) {
    this.setState({ idesc: event.target.value })
  }

  eventUnit(event) {
    this.setState({ unit: event.target.value })
  }

  eventExpiry(event) {
    console.log(event.target.value);
    this.setState({ expiry: event.target.value })
  }

  eventSprice(event) {
    console.log(event.target.value);
    this.setState({ sprice: event.target.value })
  }

  eventPprice(event) {
    console.log(event.target.value);
    this.setState({ pprice: event.target.value })
  }
  submitFun() {
    let obj = {
      name: this.state.name,
      category: this.state.category,
      icode: this.state.icode,
      idesc: this.state.idesc,
      unit: this.state.unit,
      expiry : this.state.expiry,
      sprice: this.state.sprice,
      pprice: this.state.pprice
    };
    console.log(" data");


    let formdata = this.state.formData;
    formdata.push(obj);
    this.setState({
      formData: formdata,
      name: '',
      category: '',
      icode: '',
      idesc: '',
      unit: '',
      expiry: '',
      sprice: '',
      pprice: '',
    }, () => {
      console.log(this.state.formData);

    })
  }
  componentDidMount() {
    localStorage.setItem('products', []);

  }


  render() {
    const {
      name, category, icode, idesc,unit, expiry, sprice, pprice
    } = this.state

    const disableButton = !(name && category && icode && idesc && unit && expiry && sprice && pprice);

    return (
      <div className="container">
        <div className="flex flex-row-reverse my-9 mx-5 ">
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                  <FiPlus /> ADD PRODUCTS
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
                            <div className="container w-full">
                              <h1 className="text-lg font-bold text-center">Products Details</h1>
                              <div>
                                <TextField id="standard-basic"
                               variant="outlined"
                               color="secondary"
                                label="Product Name" value={this.state.name} onChange={this.eventName} required  />

                                <label className="text-lg" htmlFor=" offers">Category :</label>
                                <select className="my-5 mx-5 p-2" name="subcategory" id="SubCategory"
                                value={this.state.category} onChange={this.eventCategory}   required>
                                  <option value="zero">Select SubCategory</option>
                                  <option value="one">Furniture</option>
                                  <option value="two">Electronic</option>
                                  <option value="three">Kitchen Sets</option>
                                </select>
                              </div>
                            <div>
                              <TextField id="standard-basic" 
                               variant="outlined"
                               color="secondary"
                               label="Item Code" 
                               value={this.state.icode} onChange={this.eventIcode}  required />
                              <TextField id="standard-basic"
                               variant="outlined"
                               color="secondary"
                               label="Item Describtion" 
                               value={this.state.idesc} onChange={this.eventIdesc}  required /></div>
                            <Divider />
                            <h2 className="text-center">Stock Details</h2>
                            <div>
                              <label className="text-lg" htmlFor=" offers">Unit :</label>
                              <select className="my-5 mx-5 p-2" name="none" id="none" 
                              value={this.state.unit} onChange={this.eventUnit} required >
                                <option value="zero">none</option>
                                <option value="one">one</option>
                                <option value="two">two</option>
                                <option value="three">three</option>
                              </select> 
                              <label className="text-lg" htmlFor="Expiry">Expiry :</label>
                              <select className="my-5 mx-5 p-2" name="expiry" id="expiry" 
                              value={this.state.expiry} onChange={this.eventExpiry} required >
                                <option value="zero">none</option>
                                <option value="days">Days</option>
                                <option value="weeks">Weeks</option>
                                <option value="months">Months</option>
                                <option value="years">Years</option>
                              </select></div>
                            <Divider />
                            <h2 className="text-center">Pricing</h2>
                            <div>
                            <TextField id="standard-basic" 
                             variant="outlined"
                             color="secondary"
                             label="Sales Price" 
                             value={this.state.sprice} onChange={this.eventSprice} required  />
                            <TextField id="standard-basic"
                             variant="outlined"
                             color="secondary"
                             label="Purchase Price" 
                             value={this.state.pprice} onChange={this.eventPprice} required  />
                            <TextField id="standard-basic" 
                             variant="outlined"
                             color="secondary"
                             label="GST" required /></div>
                             <div>
                             <button type="button" onClick={this.submitFun} value="submit" 
                             className="registerbtn" disabled={disableButton}>Submit</button>
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
            <h1 className="text-center my-6 text-lg font-bold leading-normal">PRODUCTS DETAILS</h1>
            <div className="bg-white shadow-md rounded my-6	mx-10">

              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="headerrow bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Category</th>
                    <th className="py-3 px-6 text-left">Item Code</th>
                    <th className="py-3 px-6 text-left">Item Decription</th>
                    <th className="py-3 px-6 text-left" >Unit</th>
                    <th className="py-3 px-6 text-left">Expiry</th>
                    <th className="py-3 px-6 text-left">Sales Price</th>
                    <th className="py-3 px-6 text-left">Purchase Price</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {this.state.formData.map(formData =>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">{formData.name}</td>
                      <td className="py-3 px-6 text-left">{formData.category}</td>
                      <td className="py-3 px-6 text-left">{formData.icode}</td>
                      <td className="py-3 px-6 text-left">{formData.idesc}</td>
                      <td className="py-3 px-6 text-left">{formData.unit}</td>
                      <td className="py-3 px-6 text-left">{formData.expiry}</td>
                      <td className="py-3 px-6 text-left ">{formData.sprice}</td>
                      <td className="py-3 px-6 text-left">{formData.pprice}</td>
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


