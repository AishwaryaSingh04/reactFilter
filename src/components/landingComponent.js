import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImages, searchImage } from "../actions/index";
import "./landingComponent.css";

class LandingComponent extends Component {


  state={
    searchText : '',
    selectedOption:'cardID'
  }

  componentDidMount() {
    this.props.dispatch(fetchImages());
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  handleInputChange = (event) => {
    this.setState({
      searchText:event.target.value
    });
    console.log(this.state.searchText)
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.dispatch(searchImage({type:this.state.selectedOption,text:this.state.searchText}))
  }

  render() {
    var productList;
      if(this.props.filter){
        productList = this.props.filteredArray;
        console.log(productList)
      }else{
        productList = this.props.products;
      }
    return (
      <React.Fragment>
        <div class="component-wrapper">
          <h2 className="col-md-12 d-flex justify-content-center">
            Landing Page
          </h2>
          <form className="mb-4 form-inline d-flex form-margin " onSubmit={this.handleSubmit}>
            <input type="text" class="form-control" value={this.state.searchText} onChange={this.handleInputChange}></input>
            <label className="radio-inline button-margin">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="cardID" checked={this.state.selectedOption === 'cardID'} onChange={this.handleOptionChange} /> Search by Id
            </label>
            <label className="radio-inline button-margin">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="albumID" checked={this.state.selectedOption === 'albumID'} onChange={this.handleOptionChange} />Search by album Id
            </label>
            <button className="btn btn-success" type="submit">FIND</button>
          </form>
          {productList && productList.length > 0  ? (
            <div className="image-container" >
              {productList.map(product => (
                <div className="image-box"  key={product.id}>
                  <div className="card-container">
                    <h3>CardID: {product.id}</h3>
                    <p>Card AlbumId: {product.albumId}</p>
                    <img class="image-style" src={product.thumbnailUrl} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            "Sorry!! NO result Found"
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  debugger;
  let products = state.imageList.imageArray;
  let filter = state.imageList.filterApplied;
  let filteredArray = state.imageList.filteredArray;
  return { products,filter ,filteredArray};
};



export default connect(mapStateToProps)(LandingComponent);
