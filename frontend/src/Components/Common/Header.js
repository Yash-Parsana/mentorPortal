import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import "../GeneralCSS/main.css"

export default function Header(props) {
  let index = props.index;
  console.log('index', index);
  return (
    <>
      <div>
        <div className="main-container-header">
          <div style={{}}>
            <NavLink className="nav-link" to="/">
              <div className="">
                <img
                  src="img/nv1.jpg"
                  className="homeimg"
                  style={{ width: 70, height: 70, marginTop: "14px" }}
                  alt =''
                />
              </div>
            </NavLink>
          </div>
          <div>
            <div className="tab-container-header">
              <div className="tab-container">
                <NavLink className={(index === 1) ? "nav-link active" : "nav-link"} to="/">
                  Find Mentor
                </NavLink>
              </div>


              <div className="tab-container">
                <NavLink className={(index === 3) ? "nav-link active" : "nav-link"} to="/blog">
                  Blog
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 5) ? "nav-link active" : "nav-link"} to="/roadmap">
                  Roadmap
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 6) ? "nav-link active" : "nav-link"} to="/community">
                  Community
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 6) ? "nav-link active" : "nav-link"} to="/resources">
                  Resources
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 0) ? "nav-link active" : "nav-link"} to="/aboutus">
                  About
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 4) ? "nav-link active" : "nav-link"} to="/contact">
                  Contact
                </NavLink>
              </div>

            </div>
          </div>

          <div
            className="tag-container"
            style={{
              justifyContent: "center",
              height: 100,
              alignItems: "center",
            }}
          >
            <div style={{ marginTop: "auto", marginBottom: "auto" }}>
              <NavLink className="nav-link" to="/login">
                <div className="profile w-1 h-5">
                  <img

                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

                    className="w-110 h-110 rounded-circle"
                    // style={{ width: 70, height: 70, marginTop: "14px" }}
                    style={{ width: 62, height: 62, marginTop: "0px" }}
                    height="100px"
                    alt=''
                  />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <hr className="horizontal-line"></hr>
      </div>
    </>
  );
}
