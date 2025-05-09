import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import Greet, { NameExportGreet } from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Hello /> */}

        
        {/* <Greet name="Bruce" heroName="Batman">
          <p>Paired Tag: This is children props</p>
        </Greet> */}
        {/* <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet> */}

        {/* <Greet name="Akku" heroName="spiderman" children={<b>Self-Closing Tag: Children prop</b>} /> */}
        <Greet name="Diana" heroName="Wonder Woman" />
        {/* <NameExportGreet /> */}
       
        
        <Welcome name ="Bruce" heroName="Batman"/>
        {/* <Welcome name ="Clark" heroName="Superman"/> */}
        {/* <Welcome name ="Diana" heroName="Wonder Woman"/> */}
       

        {/* <Message /> */}

        {/* <Counter /> */}

      </div>
    );
  }
}

export default App;
