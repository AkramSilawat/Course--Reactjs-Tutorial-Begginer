import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import Greet, { NameExportGreet } from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
// import styles from './appStyles.module.css/'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput';
import MemoComp from './components/MemoComp';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User'
import CounterTwo from './components/CounterTwo';


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
        {/* <Greet name="Diana" heroName="Wonder Woman" /> */}
        {/* <NameExportGreet /> */}


        {/* <Welcome name ="Bruce" heroName="Batman"/> */}
        {/* <Welcome name ="Clark" heroName="Superman"/> */}
        {/* <Welcome name ="Diana" heroName="Wonder Woman"/> */}


        {/* <Message /> */}

        {/* <Counter /> */}

        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}

        {/* <EventBind /> */}

        {/* <ParentComponent /> */}

        {/* <UserGreeting /> */}

        {/* <NameList /> */}


        {/* <Stylesheet primary={true} /> */}
        {/* <Inline /> */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}


        {/* <Form /> */}

        {/* <LifecycleA /> */}

        {/* <FragmentDemo /> */}
        {/* <Table /> */}

        {/* <MemoComp /> */}

        {/* <PureComp /> */}

        {/* <ParentComp /> */}

        {/* <RefsDemo /> */}

        {/* <FocusInput /> */}

        {/* <FRParentInput /> */}

        {/* <PortalDemo /> */}




        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}



        {/* <ClickCounter name= 'Vishwas '/>
          <HoverCounter /> */}

        {/* <ClickCounterTwo />
        <HoveredCounterTwo />
        <User rendar={(isLoggedIn) => isLoggedIn ? "Vishwas" : 'Guest'} /> */}
        <CounterTwo
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <CounterTwo
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
      </div>
    );
  }
}

export default App;
