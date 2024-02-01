import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import styled from 'styled-components';
import Timeline from './components/Timeline';
import Pro from './components/Pro';

function App() {
  return (
    <div className="App">
      <Main>
          <Header/>
          <Home/>
      </Main>
        <Skills/>
        <Timeline/>
       <Pro/>
    </div>
  );
}

export default App;

const Main = styled.div`
     background:#FFFFFF;
     border-bottom: #dddddd solid 1px;
`
