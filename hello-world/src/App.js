import React, { Component } from 'react';
import './App.css';
// import Hello from './components/Hello';
// import Greet, { NameExportGreet } from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// // import styles from './appStyles.module.css/'
// import Form from './components/Form'
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput'
// import FRParentInput from './components/FRParentInput';
// import MemoComp from './components/MemoComp';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User'
// import CounterTwo from './components/CounterTwo';
// import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/userContext';
// import PostList from './components/PostList';
// import PostForm from './components/PostForm'

import CounterFuntional from './components/CounterFuntional';

import ClassCounter from './components/State-Hooks/ClassCounter';
import HooksCounter from './components/State-Hooks/HooksCounter';
import HooksCounterTwo from './components/State-Hooks/HooksCounterTwo';
import HookCounterThree from './components/State-Hooks/HookCounterThree';
import HookCounterFour from './components/State-Hooks/HookCounterFour';
import ClassCounterOne from './components/State-Hooks/ClassCounterOne';
import HookCounterOne from './components/State-Hooks/HookCounterOne';
import ClassMouse from './components/State-Hooks/ClassMouse';
import HookMouse from './components/State-Hooks/HookMouse';
import MouseContainer from './components/State-Hooks/MouseContainer';
import IntervalClassCounter from './components/State-Hooks/IntervalClassCounter';
import IntervalHookCounter from './components/State-Hooks/IntervalClassCounter';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Hello /> */}

        {/* <Greet /> */}
          
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
        {/* <CounterFuntional /> */}

        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}

        {/* <EventBind /> */}

        {/* <ParentComponent /> */}

        {/* <UserGreeting /> */}

        {/* <NameList /> */}


        {/* <Stylesheet primary={true} /> */}
        {/* <Inline />  */}
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

        {/* <CounterTwo
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />

        <CounterTwo
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        /> */}


{/* Prop Driling: Parent se children me har component me data karna Prop Driling kahlata hai.  */}

{/* Prop Driling se bachne ke liye provider banaya jata hai.
    jis component me data access karna he direct use use kar sakte hai.
*/}
        {/* <UserProvider value={'Vishwas'}>
          <ComponentC />
        </UserProvider> */}


        {/* <PostList /> */}
        {/* <PostForm /> */}


        
      {/* **--------***----------***-----------**

      // --- React Hooks --- */}

      {/* <ClassCounter /> */}
      {/* <HooksCounter /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />  */}
      {/* <IntervalHookCounter /> */}

      </div>
    );
  }
}

export default App;
