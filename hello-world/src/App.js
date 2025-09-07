// import React, { useReducer} from 'react';
import React, { Component, useReducer } from 'react';
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
import DataFetching from './components/State-Hooks/DataFetching';
// import UserContext from './components/userContext';
import CounterOne from './components/State-Hooks/CounterOne';
import CounterTwo from './components/State-Hooks/CounterTwo';
import CounterThree from './components/State-Hooks/CounterThree';
// import ComponentC from './components/State-Hooks/ComponentC';
// import ComponentA from './components/State-Hooks/ComponentA';
// import ComponentB from './components/State-Hooks/ComponentB';
import DataFetchingOne from './components/State-Hooks/DataFetchingOne';
import DataFetchingTwo from './components/State-Hooks/DataFetchingTwo';
import ParentComponent from './components/State-Hooks/ParentComponent';
import Counter from './components/State-Hooks/Counter';
import FocusInput from './components/State-Hooks/FocusInput';
import ClassTimer from './components/State-Hooks/ClassTimer';
import HookTimer from './components/State-Hooks/HookTimer';
import DocTitleOne from './components/State-Hooks/DocTitleOne';
import DocTitleTwo from './components/State-Hooks/DocTitleTwo';
import CounterOnee from './components/State-Hooks/CounterOnee';
import CounterTwoo from './components/State-Hooks/CounterTwoo';
import UserForm from './components/State-Hooks/UserForm';
import { UseState } from './components/React-Render/UseState';
import { UseReducer } from './components/React-Render/UseReducer';
import { ObjectUseState } from './components/React-Render/ObjectUseState';
import { ArrayUseState } from './components/React-Render/ArrayUseState';
import { Parent } from './components/React-Render/Parent';
import { ParentOne } from './components/React-Render/Optimization/ParentOne';
import { ChildOne } from './components/React-Render/Optimization/ChildOne';
import { GrandParent } from './components/React-Render/Optimization/GrandParent';
import { ParentTwo } from './components/React-Render/Optimization/ParentTwo';
import { ParentThree } from './components/React-Render/Incorrect Optimizations/ParentThree';
import { ParentFour } from './components/React-Render/Incorrect Optimizations/ParentFour';
import { ContextParent } from './components/React-Render/Context/ContextParent';
import { ChildA } from './components/React-Render/Context/ContextChildren';



{/*  --- React Render --- */ }

function App() {
  return (
    <div className='App'>
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}

      {/* <ParentOne /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}

      {/* <ContextParent /> */}

      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  )
}



{/*  --- React Hooks --- */ }


// class App extends Component {
//   render() {
//     return (
//       <div className="App">

{/* <Hello /> */ }

{/* <Greet /> */ }

{/* <Greet name="Bruce" heroName="Batman">
          <p>Paired Tag: This is children props</p>
        </Greet> */}
{/* <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet> */}

{/* <Greet name="Akku" heroName="spiderman" children={<b>Self-Closing Tag: Children prop</b>} /> */ }
{/* <Greet name="Diana" heroName="Wonder Woman" /> */ }
{/* <NameExportGreet /> */ }

{/* <Welcome name ="Bruce" heroName="Batman"/> */ }
{/* <Welcome name ="Clark" heroName="Superman"/> */ }
{/* <Welcome name ="Diana" heroName="Wonder Woman"/> */ }


{/* <Message /> */ }

{/* <Counter /> */ }
{/* <CounterFuntional /> */ }

{/* <FunctionClick /> */ }
{/* <ClassClick /> */ }

{/* <EventBind /> */ }

{/* <ParentComponent /> */ }

{/* <UserGreeting /> */ }

{/* <NameList /> */ }


{/* <Stylesheet primary={true} /> */ }
{/* <Inline />  */ }
{/* <h1 className='error'>Error</h1> */ }
{/* <h1 className={styles.success}>Success</h1> */ }


{/* <Form /> */ }

{/* <LifecycleA /> */ }

{/* <FragmentDemo /> */ }
{/* <Table /> */ }

{/* <MemoComp /> */ }

{/* <PureComp /> */ }

{/* <ParentComp /> */ }

{/* <RefsDemo /> */ }

{/* <FocusInput /> */ }

{/* <FRParentInput /> */ }

{/* <PortalDemo /> */ }




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


{/* Prop Driling: Parent se children me har component me data karna Prop Driling kahlata hai.  */ }

{/* Prop Driling se bachne ke liye provider banaya jata hai.
            jis component me data access karna he direct use use kar sakte hai.
        */}
{/* <UserProvider value={'Vishwas'}>
          <ComponentC />
        </UserProvider> */}


{/* <PostList /> */ }
{/* <PostForm /> */ }



{/* **--------***----------***-----------**

        // --- React Hooks --- */}

{/* <ClassCounter />  */ }
{/* <HooksCounter />  */ }
{/* <HooksCounterTwo /> */ }
{/* <HookCounterThree /> */ }
{/* <HookCounterFour /> */ }
{/* <ClassCounterOne /> */ }
{/* <HookCounterOne /> */ }
{/* <ClassMouse /> */ }
{/* <HookMouse /> */ }
{/* <MouseContainer /> */ }
{/* <IntervalClassCounter />  */ }
{/* <IntervalHookCounter /> */ }
{/* <DataFetching /> */ }


{/* </div>
    );
  }
}  */}



// -> 16 To 21 useContext Hook Part - 1,2

// function App() {
//   return (
//     <div className='App'>
//       {/* <UserContext.Provider value={'Akram'}>
//         <ChannelContext.Provider value={'Codevolution'}>
//           <ComponentC />
//         </ChannelContext.Provider>
//       </UserContext.Provider> */}

//       {/* <CounterOne /> */}
//       {/* <CounterTwo /> */}
//       {/* <CounterThree /> */}

//     </div>
//   )
// }



// -> 22 useReducer With useContext

// export const CountContext = React.createContext()
// export const ChannelContext = React.createContext()


// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <CountContext.Provider
//       value={{ countState: count, countDispatch: dispatch }}
//     >
//       <div className='App'>
//         Count - {count}
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </CountContext.Provider>
//   )
// }


// function App() {
//   return (
//     <div className='App'>
//       {/* <DataFetchingOne /> */}
//       {/* <DataFetchingTwo /> */}
//       {/* <ParentComponent /> */}
//       {/* <Counter /> */}
//       {/* <FocusInput /> */}
//       {/* <ClassTimer />
//       <HookTimer /> */}
//       {/* <DocTitleOne />
//       <DocTitleTwo /> */}
//       {/* <CounterOnee />
//       <CounterTwoo /> */}
//       <UserForm />
//     </div>

//   )
// }

export default App;
