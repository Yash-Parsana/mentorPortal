import React from 'react'
import Header from '../Common/Header';
// import ProjectCard from '../Profile/ProjectCard';
import "./CSS/EventDiv.css"
import "../Filter/Filter.css";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
function EventCard() {
  return (
    <div>
    <div>
    <div className=' d-flex justify-content-around mt-5 mb-3' >
    <div className='d-flex justify-content-around my-2 ' style={{ width: '80%' }}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn-az.allevents.in/banners/e3137d25c10c1b049601026a8a7f0b17-rimg-w1024-h500-dc29bde4-gmir.jpeg" />
            <Card.Body>
                <Card.Title className ='d-flex justify-content-center'>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Text className='d-flex justify-content-center'  style={{opacity: 0.6}}>
                    <small>October 19,2022</small>
                </Card.Text>
                <Button variant="light" className ='mt-2' style={{ marginLeft: '7rem' }}><ReadMoreIcon /> <small>Read More</small></Button>
            </Card.Body>
        </Card>
     
    </div>

    </div>
    </div>
    </div>

  )
}

export default EventCard