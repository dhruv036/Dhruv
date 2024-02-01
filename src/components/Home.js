import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";
import Typical from 'react-typical';
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function Home() {
    return (
        <div style={{ height: "90vh", display: "flex", flexDirection: "column" }}>
            <Container>
                <TextContainer>
                    <Fade>
                        <SmallText>Hello, I'm</SmallText>
                        <BigName>DHRUV SHARMA</BigName>
                        <Subhead>
                            <Typical
                                loop={Infinity}
                                steps={
                                    [
                                        "Creative Software Developer",
                                        1000,
                                        "Android Developer",
                                        1000,
                                    ]
                                }
                            />
                        </Subhead>
                        <Discription>
                            Passionate Software Developer 🚀 having an experience of building Web 💻 and Mobile applications 📱 with Reactjs / Native Apps and some other cool libraries and frameworks.
                        </Discription>
                    </Fade>
                </TextContainer>
                <Picture>
                    <lottie-player
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets2.lottiefiles.com/private_files/lf30_WdTEui.json"
                        style={{ width: "initial" }}>
                    </lottie-player>
                </Picture>
            </Container>
            <Center>
                <Scroll>Scroll</Scroll>
                <DownArrow src={require('../images/arrow-down.svg').default} />
            </Center>
        </div>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 25px 50px 0px 100px;
    box-sizing: border-box;
    display:flex;
    flex-direction: row;

    @media(max-width : 835px){
        flex-direction: column-reverse;
        padding: 25px 100px 0px 100px;
    }
`
const TextContainer = styled.div`
    width:50%;
    color: #383838;
    @media(max-width : 835px){
       width:100%;
    }
`
const SmallText = styled.div`
    font-size:25px;
    font-family: 'Montserrat',sans-serif;    
    margin-top:70px;  
    @media(max-width : 835px){
        margin-top:0; 
        text-align:center;
    }                
`
const BigName = styled.div`
    width:inherit;
    margin-top:2px;
    font-family: 'Montserrat', sans-serif;
    font-size:11vh;
    font-weight:700;
    background: linear-gradient(45deg,#A38ED2,#F9C1EB);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-shadow: 7px 7px #333;

    @media(max-width : 835px){
        font-size:7vh;
        text-align:center;
    }
`
const Subhead = styled.div`
    font-size:20px;
    text-transform: uppercase;
    font-weight:500;
    letter-spacing:1px;
    font-family: 'Montserrat', sans-serif;

    @media(max-width : 835px){
        text-align:center;
    }
`
const Discription = styled.div`
    font-size:18px;
    margin-top:5px;
    font-weight:300;
    font-family: 'Euclid Circular B', sans-serif;

    @media(max-width : 835px){
        display:none;
        margin:0;
    }
`

const Picture = styled.div`
        width:50%;
        padding:10px;
        height:70vh;
        @media(max-width : 835px){
            width:100%;
            height:45vh;
            padding: 0;
        }
`
const Scroll = styled.div`
        font-family: 'Euclid Circular B', sans-serif;
        text-transform: uppercase;
        font-weight:500;
        border 2px solid #383838;
        border-radius:20px;
        width:fit-content;
        padding:1px 10px;
        font-size:20px;
        letter-spacing:1px;
        @media(max-width : 835px){
            font-size:15px;
        }
 `
const DownArrow = styled.img`
        margin-top:10px;
        height:30px;
        overflow-x: hidden;
        width:100%;
        animation: animatedown infinite 1.5s;
        @media(max-width : 835px){
            height:15px;
            margin-top:5px;
        }
`
const Center = styled.div`
       width:fit-content;
       margin:auto;
`