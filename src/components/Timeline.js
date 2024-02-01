import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as WorkIcon} from '../full.svg';
import  { ReactComponent as SchoolIcon} from '../logo.svg';
import  {ReactComponent as StarIcon} from '../logo.svg';
import styled from 'styled-components'

export default function Timeline() {
  return (
    <div style={{boxSizing:"border-box"}}>
        <Line>
        <Heading>Experience & Education</Heading>
        <div>
        <VerticalTimeline lineColor='#333'>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontFamily:'Montserrat', boxShadow:"25px 25px 75px rgba(33,150,243,0.25), 10px 10px 70px rgba(33,150,243,0.25), inset -5px -5px 15px rgba(33,150,243,0.5), inset 5px 5px 15px rgba(33,150,243,0.5)",borderRadius:"20px"}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            >
                    <h2 className="vertical-timeline-element-title">FULL Creative</h2>
                    <h4 className="vertical-timeline-element-subtitle">Chennai, IND</h4>
                    <h3 className="vertical-timeline-element-title">Android Developer Intern</h3>
                    
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(255, 255, 255)', color: '#333', fontFamily:'Montserrat', boxShadow:"25px 25px 75px rgba(255, 255, 255,0.25), 10px 10px 70px rgba(255, 255, 255,0.25), inset -5px -5px 15px rgba(255, 255, 255,0.5), inset 5px 5px 15px rgba(255, 255, 255,0.5)",borderRadius:"20px"}}
            date="2020 - 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#333',fontFamily:'Montserrat' }}

            >
                    <h2 className="vertical-timeline-element-title">Blueplanet Infosolution Pvt Ltd</h2>
                    <h4 className="vertical-timeline-element-subtitle">Pune, IND</h4>
                    <h3 className="vertical-timeline-element-title">Android Developer Intern</h3>
                    
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(255, 255, 255)', color: '#333', fontFamily:'Montserrat', boxShadow:"25px 25px 75px rgba(255, 255, 255,0.25), 10px 10px 70px rgba(255, 255, 255,0.25), inset -5px -5px 15px rgba(255, 255, 255,0.5), inset 5px 5px 15px rgba(255, 255, 255,0.5)",borderRadius:"20px"}}
            date="2018 - 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff',fontFamily:'Montserrat' }}

            >
                <h2 className="vertical-timeline-element-title">Chartered Institute of Technology</h2>
                    <h4 className="vertical-timeline-element-subtitle">AbuRaod, IND</h4>
                    <h3 className="vertical-timeline-element-title">Btech Computer Science</h3>
                    
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(255, 255, 255)', color: '#333', fontFamily:'Montserrat', boxShadow:"25px 25px 75px rgba(255, 255, 255,0.25), 10px 10px 70px rgba(255, 255, 255,0.25), inset -5px -5px 15px rgba(255, 255, 255,0.5), inset 5px 5px 15px rgba(255, 255, 255,0.5)",borderRadius:"20px"}}
            date="July 2018"
            iconStyle={{ background: '#2a9d8f', color: '#fff',fontFamily:'Montserrat' }}

            >
                    <h2 className="vertical-timeline-element-title">BS Memorial School</h2>
                    <h4 className="vertical-timeline-element-subtitle">AbuRaod, IND</h4>
                    <h3 className="vertical-timeline-element-title">12th Science</h3>
            </VerticalTimelineElement>
         </VerticalTimeline>
        </div>
            
        </Line>
    </div>
  )
}
const Heading = styled.div`
    font-family: 'Montserrat', sans-serif;
    text-align:center;
    color: #383838;
    font-weight:600;
   
    padding-bottom:20px;
    font-size:40px;
`
const Line = styled.div`
     padding-top:50px;
    padding-left:30px;
    padding-right:30px';
    background:#ced4da;
     ${'' /* background-image: url(images/bg.gif); */}   
`