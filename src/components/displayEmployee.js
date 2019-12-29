import React, { Component } from "react";
import {connect} from 'react-redux';

class DisplayEmployee extends Component {
  render() {
    let emp = this.props.employeeList.map(item=>{
    return ( <tr>
      <td>{item.empId}</td>
      <td>{item.firstName}</td>
      <td>{item.lastname}</td>
      <td>{item.balance}</td>
      </tr>)
    })
    return(
      <React.Fragment>
        {this.props.employeeList && this.props.employeeList>0?
      <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Employee Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
      {emp}
      </tbody>
    </table>:'No Data Found'}
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => { 
  let employeeList = state.employeeDetails.empObjList;
  debugger
  return {employeeList};
}
export default connect(mapStateToProps)(DisplayEmployee);
