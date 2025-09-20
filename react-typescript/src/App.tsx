import './App.css';
import { Button } from './components/Button';
import { Counter } from './components/class/Counter';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProviderProps } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
// import { Counter } from './components/state/Counter';
import { Status } from './components/Status';

function App() {

  // -------> Basic Props <------

  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne',
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent',
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana',
  //   }
  // ]

  return (
    <div className="App">

      {/* -------> Basic Props <------ */}

      {/* <Greet name='Akram' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList name={nameList}/> */}

      {/* <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes Leonardo Dispario!</Heading>
      </Oscar>
      <Greet name='Akram' isLoggedIn={false} /> */}

      {/* <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }}
      /> */}
      {/* <Input value='' handleChange={(event) => console.log(event)} /> */}

      {/* <Container styles={{border: '1px solid black', padding: '1rem'}}/> */}


      {/* <ThemeContextProviderProps>
        <Box />
      </ThemeContextProviderProps> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      <Counter message='The count value is' />
    </div>


  )
}

export default App;
