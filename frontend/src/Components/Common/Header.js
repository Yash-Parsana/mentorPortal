import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import "../GeneralCSS/main.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function Header(props) {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Notifications</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
        <hr />
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
        <hr />
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
        <hr />
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
        <hr />
      </Popover.Body>
    </Popover>
  );
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
                  alt=''
                />
              </div>
            </NavLink>
          </div>
          <div>
            <div className="tab-container-header">
              <div className="tab-container">
                <NavLink className=
                  {(index == 1) ? "nav-link active black" : "nav-link"} to="/">
                  Find Mentor
                </NavLink>
              </div>

              <div className="tab-container">
                <NavLink className=
                {(index==2)? "nav-link active black" : "nav-link" } to="/event">
                  Events
                </NavLink>
              </div>

              <div className="tab-container">
                <NavLink className={(index === 3) ? "nav-link active" : "nav-link"} to="/blog">
                  Blog
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 4) ? "nav-link active" : "nav-link"} to="/roadmap">
                  Roadmap
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 5) ? "nav-link active" : "nav-link"} to="/community">
                  Community
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 6) ? "nav-link active" : "nav-link"} to="/resources">
                  Resources
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 7) ? "nav-link active" : "nav-link"} to="/aboutus">
                  About
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 8) ? "nav-link active" : "nav-link"} to="/contact">
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
            <div className='me-3' style={{ width: '50px' }}>
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <NotificationsIcon style={{ width: '55px', height: '40px', color: '#3d82be' }} />
              </OverlayTrigger>
            </div>
            {/* <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <NotificationsIcon style={{ width: '50px', height: '50px', color: '#3d82be' }} />
            </OverlayTrigger> */}
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
