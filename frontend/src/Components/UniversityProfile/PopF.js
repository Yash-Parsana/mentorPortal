import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../Common/Button";
import Modal from "./PopUpFrom/Modal";
import "./PopUpFrom/styles.css";
import ProfileInputField from "../Profile/ProfileInputField";
import axios from "../../helpers/axios";
import { useNavigate } from "react-router-dom";
import "./pop.css";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";

class Pop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      title: "",
      tagline: "",
      imglink: "",
      desc:"",
      speaker:"",
      date:"",
      duration:"",
      redirect: false,
    };
  }

  componentDidMount() {
    // const sendReq = async () => {
    //     const res = await axios
    //       .get(`http://localhost:5000/api/department/getByCollgeId/${CollegeId}`)
    //       .catch((err) => console.log(err));
    //     const data = await res.data;
    //     //console.log("Data from API:" + data[0].Fname);
    //     return data;
    //   };
    // sendReq().then((data) => {
    //     this.setState({ dept: data.departments });
    //   console.log(this.state.dept);
    // });
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      title: "",
      modal: false,
    });
  }

  render() {
    const sendRequest = async () => {
      const res = await axios
        .post("/events/addevent", {
       
          name: this.state.title,
          mentor:"507f1f77bcf86cd799439011",
          speaker:"507f1f77bcf86cd799439011",
          duration:this.state.duration,
          description:this.state.desc,
          image:this.state.imglink
        })
        .catch((err) => console.log('err',err));
      const data = await res.data;
      return data;
    };
    function refreshPage() {
      window.location.reload(false);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.title);

      sendRequest()
        .then((data) => console.log(data))
        .then(() => {
          this.state.redirect && <navigate to="/event" replace={true} />;
        });
      this.modalClose();
      // refreshPage();
    };
    const { dept } = this.state;
    return (
      <div className="App">
        <a href="javascript:;" onClick={(e) => this.modalOpen(e)}>
          <div
            style={{
              marginTop: 20,
              justifyContent: "end",

              display: "flex",
              marginBottom: "50px",
              marginRight: "20px",
            }}
          >
            <Button title={"+ Add Event"} />
          </div>
        </a>
        <Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="facultypop">
                Event Name <span style={{ color: "red" }}>*</span>
              </div>
              <div style={{ width: "-webkit-fill-available" }}>
                <input
                  className="form-control input-field"
                  name="title"
                  title={"Event title"}
                  onChange={(e) => this.handleChange(e)}
                  placeholder={"Ex: Awareness about blood donation"}
                  value={this.state.title}
                />
              </div>
              <div className="facultypop">
                Tagline <span style={{ color: "red" }}>*</span>
              </div>
              <div style={{ width: "-webkit-fill-available" }}>
                <input
                  className="form-control input-field"
                  name="tagline"
                  title={"Tagline:"}
                  onChange={(e) => this.handleChange(e)}
                  placeholder={"Ex: once a bvmites a always bvmites"}
                  value={this.state.tagline}
                />
              </div>

              <div className="facultypop">
                Duration <span style={{ color: "red" }}>*</span>
              </div>

              <div style={{ width: "-webkit-fill-available" }}>
                <input
                  className="form-control input-field"
                  name="duration"
                  title={"Duration of Event"}
                  onChange={(e) => this.handleChange(e)}
                  placeholder={"Ex: 45min"}
                  value={this.state.duration}
                />
              </div>

              <div className="facultypop">
                Date <span style={{ color: "red" }}>*</span>
              </div>

              <div style={{ width: "-webkit-fill-available" }}>
                <input
                  className="form-control input-field"
                  name="date"
                  title={"Date of Event"}
                  onChange={(e) => this.handleChange(e)}
                  placeholder={"Ex: 23rd November, 2023"}
                  value={this.state.date}
                />
              </div>

              <div className="facultypop">
              Speaker Name <span style={{ color: "red" }}>*</span>
            </div>

            <div style={{ width: "-webkit-fill-available" }}>
              <input
                className="form-control input-field"
                name="speaker"
                title={"speaker of Event"}
                onChange={(e) => this.handleChange(e)}
                placeholder={"Ex: Dharmesh Vala"}
                value={this.state.speaker}
              />
            </div>
            <div className="facultypop">
            Mentor Name <span style={{ color: "red" }}>*</span>
          </div>

          <div style={{ width: "-webkit-fill-available" }}>
            <input
              className="form-control input-field"
              name="mentor"
              title={"mentor of Event"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: Dharmesh Vala"}
              value={this.state.mentor}
            />
          </div>

            <div className="facultypop">
            Description <span style={{ color: "red" }}>*</span>
          </div>

          <div style={{ width: "-webkit-fill-available" }}>
            <input
              className="form-control input-field"
              name="desc"
              title={"Description of Event"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: Enter Description"}
              value={this.state.desc}
            />
          </div>

              <div className="facultypop">Poster Link</div>
              <div style={{ width: "-webkit-fill-available" }}>
                <input
                  className="form-control input-field"
                  name="imglink"
                  title={"Event Photo Link"}
                  onChange={(e) => this.handleChange(e)}
                  placeholder={"Ex: Upload link like drive link"}
                  value={this.state.imglink}
                />
              </div>
            </div>
            <div className="form-group">
              <div
                style={{
                  marginTop: 20,
                  justifyContent: "center",
                  display: "flex",
                  marginRight: "20px",
                }}
              >
                <Button
                  title={"Submit"}
                  // onClick={(e) => this.handleSubmit(e)}
                />
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

function PopF() {
  return (
    <div>
      <Pop />
    </div>
  );
}

export default PopF;
