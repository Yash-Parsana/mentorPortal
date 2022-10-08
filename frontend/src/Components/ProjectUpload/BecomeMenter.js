import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import Header from "../Common/Header";
import ProgressBar from "./ProgressBar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Cookies from 'universal-cookie'
export default function BecomeMenter() {

//   const cookies = new Cookies();

//  const UserId = cookies.get('userId')

    var [tags, setTags] = useState("");
  const [tagList, setTaglist] = useState([]);
  
  const [timeframe, setTimeFrame] = useState("");
  const [timeframe2, setTimeFrame2] = useState("");
  const [timeframe3, setTimeFrame3] = useState("");
  const [tagList2, setTaglist2] = useState([]);
  
  const [tagList3, setTaglist3] = useState([]);


    var [ inputTag , setInputTag ] = useState({});
    let projId;
    const subId = useParams().SubId;
    const Tags = (event) => {
      var str = event.target.value;
      setTags(str);
    };
  
    const handleChange = (e) =>{
      console.log(e.target.name);
      
      setInputTag((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }

    
    const sendReq = async() =>{
      let Rtype = document.getElementsByName("Rtype");
      console.log(inputTag.PName);
      
      Array.from(Rtype).forEach(element => {
        if(element.checked)
        inputTag.PType = element.value;
      });
      
      inputTag.UserId = "62f9142c5cf6d43a8bbcc544"
       
      const ele = document.getElementsByName("isPrivete");
      
      inputTag.isPrivete = ele[0].checked;
      inputTag.Tags = tagList
      inputTag.SubjectId = subId

      console.log(inputTag);
      const res = await axios
      .post(`http://localhost:5000/api/Project/add`,inputTag)
      .catch((err)=> console.log(err));
      const data = await res.data;
      return data;
    }
    const uploadProject = (e)=>{
      e.preventDefault();
      sendReq()
        .then((data) => {
        console.log(data)
        projId = data.ProjectId 
        console.log(projId);
        sendReqToSet().then(()=>{
          alert("project Uploaded!");
          window.location.reload();
        });
        })
     
       
    }
    const setToTaglist = (e, k) => {
      if (e.keyCode == 13) {
        setTaglist([...tagList, k]);
        e.target.value = "";
      }
    };
     
    const setToTaglist2 = (e, k) => {
      if (e.keyCode == 13) {
        setTaglist2([...tagList, k]);
        e.target.value = "";
      }
    };
    const setToTaglist3 = (e, k) => {
      if (e.keyCode == 13) {
        setTaglist3([...tagList, k]);
        e.target.value = "";
      }
    };
    const sendReqToSet = async() => {
      
    const response = await axios.post(`http://localhost:5000/api/Project/getPlagarism`,
    {
        projectId : projId
    }).catch((err) => console.log(err));
    console.log("-----------here is avg");
    console.log(response.data.avg);

    const pRate = response.data.avg;
    
    const setPlagRes = await axios.put(`http://localhost:5000/api/Project/setPlga`,
    {
      projectId : projId,
      PlagRate : pRate
    }
    ).catch((err)=>console.log(err));

    } 

    return ( 
      <>
        <Header index="2"/>
       <div className="container " style={{fontFamily: 'poppins', marginTop: -30}}>
        <div className=" p-3 ">
          <form  onSubmit={uploadProject} >
          <div className="form-group row" style={{marginTop: -10}}>
          <label style={{textAlign: 'left',}} for="desc" className="col-sm-2 downn col-form-label">
            <strong>Introduce Yourself to Mentee's:</strong>
          </label>
          <div className="col-sm-10">
            <textarea className="form-control f-textarea" id="desc" 
            placeholder="Introduce Yourself to Mentee's" 
            rows="3"  
            name="Desc"
            style={{paddingLeft: 15, paddingRight: 15}} 
            onChange={handleChange}
            value={inputTag.Desc}
            required></textarea>
          </div>
        </div>

  
            <div className="form-group row">
              <label
                for="name"
                style={{textAlign: 'left',}}
                className="col-sm-2 col-form-label downn font-weight-bold"
              >
                <strong>District:</strong>
              </label>
              <div className="col-sm-10">
                <input
                style={{paddingLeft: 15, paddingRight: 15}}
                  type="text"
                  className="form-control form-input"
                  name="PName"
                  placeholder="Enter Your Distric Name"
                  onChange={handleChange}
                  value={inputTag.PName}
                  required
                />
              </div>
            </div>
  
            <div className="form-group row">
              <label
                for="name"
                style={{textAlign: 'left',}}
                className="col-sm-2 col-form-label downn font-weight-bold"
              >
                <strong>State:</strong>
              </label>
              <div className="col-sm-10">
                <input
                style={{paddingLeft: 15, paddingRight: 15}}
                  type="text"
                  className="form-control form-input"
                  name="PName"
                  placeholder="Enter Your State Name"
                  onChange={handleChange}
                  value={inputTag.PName}
                  required
                />
              </div>
            </div>
  
            <div className="form-group row">
              <label
                for="name"
                style={{textAlign: 'left',}}
                className="col-sm-2 col-form-label downn font-weight-bold"
              >
                <strong>Industry:</strong>
              </label>
              <div className="col-sm-10">
                <input
                style={{paddingLeft: 15, paddingRight: 15}}
                  type="text"
                  className="form-control form-input"
                  name="PName"
                  placeholder="Enter Your Industry Name"
                  onChange={handleChange}
                  value={inputTag.PName}
                  required
                />
              </div>
            </div>

            
  
           
            <div class="form-group row" style={{marginTop: -10}}>
              <label style={{textAlign: 'left',}} for="inputPassword" class="col-sm-2 downn col-form-label">
                <strong>Photo Link</strong>
              </label>
              <div class="col-sm-10">
                <input
                style={{paddingLeft: 15, paddingRight: 15}} 
                  type="text"
                  class="form-control form-input"
                  id="ProjectLink"
                  name="ProjectLink"
                  value={inputTag.ProjectLink}
                  onChange={handleChange}
                  placeholder="Project Upload"
                  required
                />
              </div>
            </div>

            
            <div className="form-group row" style={{marginTop: -10}}>
            <label style={{textAlign: 'left',}} for="desc" className="col-sm-2 downn col-form-label">
                <strong>Tools:</strong>
              </label>
            <input
                  className="form-control form-input"
                  name="tag"
                  id="tag"
                  placeholder="Ex. Web Development"
                  onKeyUp={(e) => setToTaglist(e, timeframe)}
                  onChange={(e) => setTimeFrame(e.target.value)}
                />
                </div>
 
                <div className="a_fillter">

                <div className="tags">
                  {tagList.map((ele) => {
                    return (
                      <div className="tag">
                        <p>{ele}</p>
                        {/* <img src={('img/close.png')} alt="cross" className='close' onClick={}/> */}
                      </div>
                    );
                  })}
                </div>
                </div>

                <div className="form-group row" style={{marginTop: -10}}>
                <label style={{textAlign: 'left',}} for="desc" className="col-sm-2 downn col-form-label">
                    <strong>Expertise:</strong>
                  </label>
                <input
                      className="form-control form-input"
                      name="tag"
                      id="tag"
                      placeholder="Ex. Web Development"
                      onKeyUp={(e) => setToTaglist2(e, timeframe2)}
                      onChange={(e) => setTimeFrame2(e.target.value)}
                    />
                    </div>
     
                    <div className="a_fillter">
    
                    <div className="tags">
                      {tagList2.map((ele) => {
                        return (
                          <div className="tag">
                            <p>{ele}</p>
                            {/* <img src={('img/close.png')} alt="cross" className='close' onClick={}/> */}
                          </div>
                        );
                      })}
                    </div>
                    </div>
           
                    <div className="form-group row" style={{marginTop: -10}}>
                    <label style={{textAlign: 'left',}} for="desc" className="col-sm-2 downn col-form-label">
                        <strong>Language:</strong>
                      </label>
                    <input
                          className="form-control form-input"
                          name="tag"
                          id="tag"
                          placeholder="Ex. Web Development"
                          onKeyUp={(e) => setToTaglist3(e, timeframe3)}
                          onChange={(e) => setTimeFrame3(e.target.value)}
                        />
                        </div>
         
                        <div className="a_fillter">
        
                        <div className="tags">
                          {tagList3.map((ele) => {
                            return (
                              <div className="tag">
                                <p>{ele}</p>
                                {/* <img src={('img/close.png')} alt="cross" className='close' onClick={}/> */}
                              </div>
                            );
                          })}
                        </div>
                        </div>
           
                        
              
            <div className="justify-content align-center  mt-3 ">
              <div className="w-25" style={{textAlign: 'left'}}>
              <button type="submit" style={{height:"41px", boxShadow: "2px -1px 32px 0px rgba(44,94,255,0.36)"}} onClick={uploadProject} className=" search-bar-button  m-auto " >
              Submit
            </button>        
                
              </div>
            </div>
          </form>
        </div>
       </div>
      </>
    );
  }

