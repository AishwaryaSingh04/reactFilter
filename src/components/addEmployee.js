import React, { Component } from "react";
import "./addEmployee.css";
import { fieldValueChanged } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {employeeAdded} from '../actions/index';

class AddEmployee extends Component {
  onInputChange = event => {
    let { name, value } = event.target;
    this.props.fieldValueChanged({ name, value });
  };

  onSubmitClick = () => {
    let { empId, firstName, lastName, balance } = this.props;
    let nameOBJ = "empObjList";
    let value = {
      empId: empId,
      firstName: firstName,
      lastName: lastName,
      balance: balance
    };
   this.props.employeeAdded({nameOBJ:value})
  };

  onKeyPressed = (event) => {
    debugger;
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
     if (/\+|-/.test(keyValue))
       event.preventDefault();
   }

  render() {
    return (
      <React.Fragment>
        <form className="form-wrapper col-xs-12 col-sm-12 col-lg-7 col-lg-offset-2">
          <div className="input-container">
            <input
              type="text"
              class="inputText"
              name="empId"
              onChange={this.onInputChange}
              required
            />
            <span class="floating-label">Employee ID</span>
          </div>
          <div className="input-container">
            <input
              type="text"
              class="inputText"
              name="firstName"
              onChange={this.onInputChange}
              required
            />
            <span class="floating-label">First Name</span>
          </div>
          <div className="input-container">
            <input
              type="text"
              class="inputText"
              name="lastName"
              onChange={this.onInputChange}
              required
            />
            <span class="floating-label">Last Name</span>
          </div>
          <div className="input-container">
          

            <input
              type="text"
              class="inputText"
              name="balance"
              tabIndex="0" 
              onChange={this.onInputChange}
              onKeyDown={this.onKeyPressed}
              
              required
            />

            <span class="floating-label">Balance</span>
          </div>
          <div class="button-wrapper col-xs-12 col-sm-12 col-lg-7 col-lg-offset-2">
            <input
              type="button"
              onClick={this.onSubmitClick}
          
              class="custom-button btn"
              data-original-title=""
              title=""
              value="Add"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  let { empId, firstName, lastName, balance } = state.employeeDetails;
  return { empId, firstName, lastName, balance };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fieldValueChanged ,employeeAdded }, dispatch)
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEmployee);
