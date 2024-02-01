import React from 'react'
import styled from 'styled-components'
import './Pro.css'

export default function Pro() {
  return (
    <div className='Mains'>
        <div className='center-hori heading'>
            Projects
        </div>
            
          <div className='section'>
                
                <div className='first'>
                    {/* Text*/}
                    <div className='project-detail'>
                        <div className='head'>ChatBea</div>
                        <p>Android app for chating to your loved ones through Text, Video/ Voice calls. App also have feature to upload Snaps also known as Staus. App also have Encyption technique  know one guess your Chat</p>
                        <div style={{marginLeft:'20px'}}>
                          <span className='key'>Android</span>
                          <span className='key'>Java</span>
                          <span className='key'>Mesibo SDK</span>
                          <span className='key'>Firebase</span>
                        </div>
                        <div style={{marginTop:'30px',marginLeft:'20px'}}>
                           <span className='bt'>GITHUB</span>
                        </div>
                    </div>
                    {/* Image */}
                    <div className='project-picture'>
                        <img src={require('../images/hello-app.png')}></img>
                    </div>

                </div>
                <div style={{marginTop:'50px'}}></div>
                <div className='first'>
                    {/* Image */}
                     <div className='project-picture2'>
                        <img src={require('../images/project2.png')}></img>
                        
                    </div>
                    {/* Text*/}
                    <div className='project-picture'>
                        <div className='head2'>ESYLIBRARY</div>
                        <p>Android app for chating to your loved ones through Text, Video/ Voice calls. App also have feature to upload Snaps also known as Staus. App also have Encyption technique  know one guess your Chat</p>
                        <div style={{marginLeft:'20px',direction:'rtl'}}>
                          <span className='key'>Android</span>
                          <span className='key'>Java</span>
                          <span className='key'>Mesibo SDK</span>
                          <span className='key'>Firebase</span>
                        </div>
                        <div style={{marginTop:'30px',marginLeft:'20px',direction:'rtl'}}>
                           <span className='bt'>GITHUB</span>
                        </div>
                       
                    </div>
              
                </div>
          </div>
          <div className='center-hori'>
              <div style={{}}>Many more..</div>
          </div>
        

    </div>
  );
}
