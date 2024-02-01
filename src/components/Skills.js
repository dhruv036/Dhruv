import React from 'react'
import styled from 'styled-components'
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function Skills() {

  return (
    <div>

    {/* 918 */}
        <Container>
             {/* Main Heading */}
            <Heading>
                <Head1>Skills</Head1>
                <Head>Technical Expertise</Head>
            </Heading>

            <All>
                <Subheading>
                        <lottie-player
                            autoplay
                           
                            loop
                            mode="normal"
                            src="https://assets6.lottiefiles.com/packages/lf20_w9zknltp.json"
                            // style={{width:"318px"}}
                            style={{width:"400px"}}
                            >
                        </lottie-player>
                            {/* <img src={require('../images/working-man.gif')} style={{width:'100%'} } alt='Image'></img> */}
                </Subheading>
                <Main>
                    <Compo >
                        <AllSkill style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
                                <Single>
                                    <Outer>
                                        <Inner>
                                            <span>50%</span>
                                        </Inner>
                                    </Outer>
                                    <Create name={"url(#GradientColor2)" }number={'one'}></Create>
                                </Single>
                        </AllSkill>
                        <div style={{display:'flex',flexDirection:"column"}}>
                            <Head2 style={{fontSize:"40px",color:"#A2C5FE",marginBottom:'10px'}}>Language </Head2>
                            <div style={{display:'flex',flexDirection:"row"}}>
                                <img src={require('../images/cplusplus.svg').default} style={{height:'40px', width:'40px',marginRight:'10px'}}></img>
                                <img src={require('../images/java.svg').default} style={{height:'40px', width:'40px',marginRight:'10px'}}></img>
                                <img src={require('../images/javascript.svg').default} style={{height:'40px', width:'40px',marginRight:'10px'}}></img>
                            </div>
                        </div>
                        
                    </Compo>
                    <Compo>
                        <AllSkill style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
                                <Single>
                                    <Outer>
                                        <Inner>
                                            <span>60%</span>
                                        </Inner>
                                    </Outer>
                                    <Create name={"url(#GradientColor3)" } number={'two'}></Create>
                                </Single>
                        </AllSkill>
                        <div style={{display:'flex',flexDirection:"column"}}>
                        <Head2 style={{fontSize:"40px",color:"#EF9DA8",marginBottom:'10px'}}>Android Development</Head2>
                            <div style={{display:'flex',flexDirection:"row"}}>
                            <img src={require('../images/android.svg').default} style={{height:'40px', width:'40px',marginRight:'10px'}}></img>
                            <img src={require('../images/kotlin.svg').default} style={{height:'40px', width:'40px',marginRight:'10px'}}></img>
                            <img src={require('../images/gradel.svg').default} style={{height:'40px', width:'40px',marginRight:'10px'}}></img>
                            <img src={require('../images/firebase.svg').default} style={{height:'40px', width:'40px',marginRight:'10px'}}></img>
                            </div>
                        </div>
                        
                    </Compo>
                    <Compo>
                        <AllSkill style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
                                <Single>
                                    <Outer>
                                        <Inner>
                                            <span>40%</span>
                                        </Inner>
                                    </Outer>
                                    <Create name={"url(#GradientColor4)"} number={'three'}></Create>
                                </Single>
                        </AllSkill>
                        <div style={{display:'flex',flexDirection:"column"}}>
                        <Head2 style={{fontSize:"40px",color:"#A38ED2"}}>Frontend & Backend</Head2>
                            <div style={{display:'flex',flexDirection:"row"}}>
                            <img src={require('../images/html5.svg').default} style={{height:'40px', width:'40px',marginRight:'10px'}}></img>
                            <img src={require('../images/css3.svg').default} style={{height:'40px', width:'40px',marginRight:'10px'}}></img>
                            <img src={require('../images/react.svg').default} style={{height:'40px', width:'40px',marginRight:'10px'}}></img>
                            <img src={require('../images/mysql.svg').default} style={{height:'40px', width:'40px',marginRight:'10px'}}></img>
                            </div>
                        </div>
                    </Compo>
                    
                </Main>
            </All>
        </Container>
        
    </div>
  )
}

function Create({name,number}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">
        <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
               {/* <stop offset="0%" stopColor="#141e30" />
               <stop offset="100%" stopColor="#243b55" /> */}
            </linearGradient>
            <linearGradient id="GradientColor2">
               <stop offset="0%" stopColor="#A2C5FE" />
               <stop offset="100%" stopColor="#C2E9FC" />
            </linearGradient>
            <linearGradient id="GradientColor3">
               <stop offset="0%" stopColor="#EF9DA8" />
               <stop offset="100%" stopColor="#FFDCE0" />
            </linearGradient>
            <linearGradient id="GradientColor4">
               <stop offset="0%" stopColor="#A38ED2" />
               <stop offset="100%" stopColor="#F9C1EB" />
            </linearGradient>
         </defs>

        <circle className={number} cx="50" cy="50" r="40"  stroke={name} strokeLinecap="round"/>


    </svg>
    )
}

const Container = styled.div`
        box-sizing: border-box;
        ${'' /* border:1px solid red; */}
        width:100%;
        box-sizing: border-box;
        background:#333;
        box-shadow: inset 0px 1px 4px 0px rgb(0 0 0 / 10%);
        padding-top:50px;
        
`
const Heading = styled.div`
        display:flex;
        flex-direction:column;
        box-sizing: border-box;
        justify-content:center;
        border-radius:10px;
        ${'' /* box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7) */}
        ${'' /* box-shadow: 25px 25px 50px rgba(9,148,255,0.25), -10px -10px 30px rgba(9,148,255,0.1), inset -5px -5px 15px rgba(9,148,255,0.5); */}
        
`
const AllSkill = styled.div`
        display:flex;
        
`
const Compo = styled.div`
        display:flex;
        border-radius:20px;
        padding:10px 10px;
        box-sizing: border-box;
        margin:20px 50px;
        transition: all 100ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        background:#333;
        cursor:pointer;
        box-shadow:  25px 25px 75px rgba(0,0,0,0.25), 10px 10px 70px rgba(0,0,0,0.25), inset
       -5px -5px 15px rgba(0,0,0,0.5), inset 5px 5px 15px rgba(0,0,0,0.5);

       &:hover{
        margin:2px 30px;
       }
    
`
const Main = styled.div`
        width:60%;
        display:flex;
        background:#333;
        margin-top:30px;
        box-sizing: border-box;
        flex-direction:column;
        padding:0px 10px;
`
const All = styled.div`
         display: flex;
         box-sizing: border-box;
         width:100%;
         justify-items: center;
`
const Head1 = styled.div`
        text-transform:uppercase;
        font-family: 'Euclid Circular B', sans-serif;
        letter-spacing:1px;
        text-align:center;
        font-size:15px;
        color: white;
        
`
const Head = styled.div`
    font-family: 'Montserrat', sans-serif;
    text-align:center;
    font-weight:600;
    color: white;
    font-size:40px;
`
const Head2 = styled.div`
        font-family: 'Montserrat', sans-serif;
        letter-spacing:1px;
        font-weight:500;
        text-align:center;
        color:white;
        font-size:40px;
       
`
const Single = styled.div`
        margin:5px;
        height:100px;
        display: flex;
        width:100px;
        position:relative;
        
`
const Outer = styled.div`
     min-width:100px;
     min-height:100px;
     border-radius: 50%;
     box-sizing: border-box;
     padding:20px;
     box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.35), -6px -6px 10px -1px rgba(0,0,0,0.5);
     ${'' /* display:flex; */}
     ${'' /* align-items:center;
     justify-content:center; */}
     
`
const Inner = styled.div`
    height:60px;
    width:60px;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius: 50%;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(0,0,0,0.7),
    -0.5px -0.5px 0px rgba(0,0,0,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05);
    span{
        font-weight:500;
        font-family: 'Euclid Circular B', sans-serif;
        font-size:15px;
        color:#dfe9f3;
    }
    
`
const Subheading = styled.div`
        width:40%;
`