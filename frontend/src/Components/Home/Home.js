import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import { Link } from "react-router-dom";
import "./Home.css"
import "./Search/search.css"
import Me from './Me';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMentors } from '../../actions/mentor.action';
import SearchInterestBasedMentors from '../Project/SearchBar';
import RecommendedMentor from './RecommendedMentor';

export default function Home() {

    const dispatch = useDispatch();

    const { mentors } = useSelector(state => state.mentor)
    mentors ? console.log('mentors', mentors) : console.log('nothing');


    useEffect(() => {
        dispatch(getAllMentors())
    }, [])

    const { recommendedMentors } = useSelector(state => state.mentor)

    console.log('recommendedMentors', recommendedMentors)


    const [searchinput, searchinputUpdate] = useState("");

    

    const [projects, setProjects] = useState();

   
    const filter2 = () => {
        let temp = [...projects];

        if (searchinput != "") {
            temp = temp.filter((ele) => {
                return ele.PName.toLowerCase().includes(searchinput.toLowerCase());
            });
        }

        if (tagList != "" && tag != "") {
            temp = temp.filter((ele) => {
                return ele.Tags.includes(tag);
            });
        }

        if (tagList != "" && lang != "") {

            temp = temp.filter((ele) => {
                return ele.Tags.includes(lang);
            });
        }

        if (tagList != "" && timeframe != "") {

            temp = temp.filter((ele) => {
                console.log(ele.Date.getFullYear);
                return ele.Date.getFullYear === timeframe;
            });
        }

        console.log("---r---");
        console.log(temp);
        setProjects(temp);

        // sessionStorage.setItem('searchinput', searchinput);
        // setFlag("true");
    };

    const [tag, setTag] = useState("");
    const [lang, setLang] = useState("");
    const [timeframe, setTimeFrame] = useState("");
    const [university, setUniversity] = useState("");
    const [tagList, setTaglist] = useState([]);
    const setToTaglist = (e, k) => {
        if (e.keyCode == 13) {
            setTaglist([...tagList, k]);
            e.target.value = "";
        }
    };
    return (
        <>
            <Header index={1} />

           
            <div style={{ width: "100%" }}>
                <div
                    style={{ paddingLeft: 40, paddingRight: 40, justifyContent: "left" }}
                >
                    <div style={{ marginTop: 40 }} />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <SearchInterestBasedMentors />
                    </div>
                </div>
            </div>

            <div className="flexforfilter">
                <div className="a_fillter">

                    <p className="tag" style={{ fontSize: "25px" }}>Applied Fillter</p>
                    <div className="tags">
                        {tagList.map((ele) => {
                            return (
                                <div className="tag">
                                    <p>{ele}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="short_filter">
                    <div className="title">
                        <img src={"img/Vector.png"} alt="short icon" />
                        <p>Short Filters</p>
                    </div>
                    <div className="filter_container">
                        <div className="filters">
                            <div className="tag">
                                <label htmlFor="tag">
                                    <img src={"img/Tags.png"} alt="tag" />
                                    <p>Tag</p>
                                </label>
                                <div
                                    className="sign-in-input-field-container"
                                    style={{ marginTop: 15 }}
                                >
                                    <input
                                        className="sign-in-input-fields"
                                        type="text"
                                        placeholder="Ex.Web"
                                        name="tag"
                                        id="tag"
                                        onKeyUp={(e) => setToTaglist(e, tag)}
                                        onChange={(e) => setTag(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className="tag">
                                <label htmlFor="language">
                                    <img src={"img/Code.png"} alt="Code" />
                                    <p>Language</p>
                                </label>
                                <div
                                    className="sign-in-input-field-container"
                                    style={{ marginTop: 15 }}
                                >
                                    <input
                                        className="sign-in-input-fields"
                                        type="text"
                                        placeholder="Ex.Java"
                                        name="language"
                                        id="language"
                                        onKeyUp={(e) => setToTaglist(e, lang)}
                                        onChange={(e) => setLang(e.target.value)}
                                    />
                                </div>


                            </div>
                            <div className="tag">
                                <label htmlFor="timeframe">
                                    <img src={"img/time.png"} alt="tag" />
                                    <p>Domain</p>
                                </label>
                                <div
                                    className="sign-in-input-field-container"
                                    style={{ marginTop: 15 }}
                                >
                                    <input
                                        className="sign-in-input-fields"
                                        type="text"
                                        placeholder="Ex.Data Science"
                                        name="timeframe"
                                        id="timeframe"
                                        onKeyUp={(e) => setToTaglist(e, timeframe)}
                                        onChange={(e) => setTimeFrame(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className="tag">
                                <label htmlFor="University">
                                    <img src={"img/University.png"} alt="University" />
                                    <p>Expertise</p>
                                </label>
                                <div
                                    className="sign-in-input-field-container"
                                    style={{ marginTop: 15 }}
                                >
                                    <input
                                        className="sign-in-input-fields"
                                        type="text"
                                        placeholder="Ex.BVM"
                                        name="University"
                                        id="University"
                                        onKeyUp={(e) => setToTaglist(e, university)}
                                        onChange={(e) => setUniversity(e.target.value)}
                                    />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <>
                    {recommendedMentors.length > 0 && recommendedMentors.map((mentor) => {
                        return (
                            <RecommendedMentor style={{ marginTop: "15px" }}
                                mentor={mentor}
                            />
                        )
                    })}

                </>


            </div>
            <div className="container">

                <>
                {mentors.length > 0 && mentors?.map((mentor) => {
                    return (
                        <Me style={{ marginTop: "15px" }}
                            name={mentor?.name}
                            intro={mentor?.intro}
                        />
                    )
                })}
                   
                </>


            </div>
        </>
    )
}
