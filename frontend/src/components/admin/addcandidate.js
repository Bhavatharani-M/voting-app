import React from "react";
import axios from "axios";
import "../style.css";

export class Candidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: "",
      name: "",
      party: "",
      errors: {},
    };
    this.handleChangeimgurl = this.handleChangeimgurl.bind(this);

    this.handleChangename = this.handleChangename.bind(this);

    this.handleChangeparty = this.handleChangeparty.bind(this);

    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChangeimgurl(e) {
    this.setState({ imgurl: e.target.value });
  }

  handleChangename(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeparty(e) {
    this.setState({ party: e.target.value });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();

    if (this.validateForm()) {
      var data = {
          candidate:{
        name: this.state.name,

        party: this.state.party,

        imgurl: this.state.imgurl
          }
      };

      axios
        .post("https://voteapp-1.herokuapp.com/vote/addCan", data)
        .then(function (response) {
            if(response){
                alert(response.data.message);
            }
        })
        .catch(function (error) {
          alert(error);
        });
    }
  }

  validateForm() {
    let errors = {};

    let formIsValid = true;

    if (!this.state.name) {
      formIsValid = false;

      errors["name"] = "*Please enter candidate name";
    }

    if (!this.state.imgurl) {
        formIsValid = false;
  
        errors["imgurl"] = "*Please enter image url.";
      }

      

    if (!this.state.party) {
      formIsValid = false;

      errors["party"] = "*Please enter party name.";
    }

    this.setState({
      errors: errors,
    });

    return formIsValid;
  }

  render() {
    return (
        sessionStorage.getItem("admin")==="true" ?
        <>
        <div style={{margin:"3%"}}>
                        <a href="/list" className="but1">View votes</a>
                        <a href="/" className="but2" onClick={()=>{sessionStorage.clear();}}>Logout</a>
            </div>
      <div className="base-containerls" ref={this.props.containerRef}>
           
        <div className="headerls">Add candidate</div>
        <div className="contentls">
          <div className="formls">
            <div className="form-groupls">
              <input
                type="text"
                name="imgurl"
                id="imgurl"
                value={this.state.imgurl}
                onChange={this.handleChangeimgurl}
                placeholder="Enter Image url"
              />
            </div>
            <div className="errorMsg">{this.state.errors.imgurl}</div>
            <div className="form-groupls">
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChangename}
                placeholder="Enter Candidate name"
              />
            </div>
            <div className="errorMsg">{this.state.errors.name}</div>
            <div className="form-groupls">
              <input
                type="text"
                name="party"
                id="party"
                value={this.state.party}
                onChange={this.handleChangeparty}
                placeholder="Enter Party name"
              />
            </div>
            <div className="errorMsg">{this.state.errors.party}</div>
          </div>
        </div>
        <div className="footerls">
          <button
            onClick={this.submituserRegistrationForm}
            className="buttonlog"
          >
            Add
          </button>
        </div>
      </div> </>: <h1 style={{
            fontSize:'2rem',
            textAlign:"center",
            marginTop:"20%",
        }}> oops!!!You have to login to see this page.... </h1>
    );
  }
}
