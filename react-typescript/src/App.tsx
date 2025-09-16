import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
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
      
      
    </div>

    
  )
}

export default App;
