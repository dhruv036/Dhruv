import React,{ useState } from 'react'
import styled from 'styled-components'
import "./Pro.css"
 function Header() {

  const[style,setStyle] = useState('closeNav');

  return (
    <div>
        <Container>
            <p>Dhruv</p>
            <Menu>
              <i class="fa-solid fa-xmark"></i>
              <ul className={style} id='list'>
                <li onClick={() => setStyle('closeNav')}>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Let's Talk</li>
              </ul>
            </Menu>
            <RightBurger show={style}>
                <i className="fa-solid fa-bars fa-lg" onClick={() => setStyle('openNav')
              }></i> 
            </RightBurger>
             
          
        </Container>
    </div>
  );
}
export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  align-items:center;
  padding: 0px 10px;
  justify-content: space-between;

  p{
    font-family: "Arthemis";
    font-size:50px;
    margin:0;
  }

  i{
    display:none;
    cusor:pointer
  }

  @media( max-width : 570px){
    i{
      display:block;
    }
  }
`

const Menu = styled.div`
    
    li{
        list-style: none;
        display:inherit;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        cursor:pointer;
        color: #27374c;
        margin: 0px 5px;
        font-size: 12px;
        background-color: #ffffff;
        letter-spacing: 1px;
        border: 1.5px solid #333;
        padding: 5px 12px;
        border-radius:30px;
        opacity:0.7;
    }

    li:hover{
      opacity:1.0;
      color: white;
      background-color: #333;
      border: 1.5px solid #333;
      // transform: scale(1.1, 1.1);
    }

    @media( max-width : 570px){
      .closeNav{
        display:none;
      }
    }
`
const RightBurger = styled.div`
`
