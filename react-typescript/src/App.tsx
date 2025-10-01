import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/Button';
import { Counter } from './components/class/Counter';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProviderProps } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { List } from './components/generics/List';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { CustomButton } from './components/html/Button';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Text } from './components/polymorphic/Text';
import { RendomNumber } from './components/restriction/RandomNumber';
// import { Counter } from './components/state/Counter';
import { Status } from './components/Status';
import { Toast } from './components/templateliterals/Toast';

function App() {

  // -------> Basic Props <------

  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    }
  ]

  return (
    <div className="App">

      {/* -------> Basic Props <------ */}

      {/* <Greet name='Akram' messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList}/> */}

      {/* <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes Leonardo Dispario!</Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis</p>
        <br />
        <button>submit</button>
      </Oscar>
      <Greet isLoggedIn={true} name='Akram' messageCount={20} /> */}

      {/* <Button handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      /> */}


      {/* <Input
        value=''
        placeholder="Enter the user name"
        handleChange={(event) => console.log(event)}
      />

      <Input
        value=''
        placeholder="Enter Mobile"
        handleChange={(event) => console.log(event.target)}
      />

      <Input
        value=''
        placeholder="Enter email"
        handleChange={(event) => console.log(event.target.value)}
      /> */}

      {/* <Container styles={{border: '1px solid black', padding: '1rem'}}/> */}


      {/* <ThemeContextProviderProps>
        <Box />
      </ThemeContextProviderProps> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <Counter message='The count value is' /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}


      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman ']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

      {/* ----> 20. Generic Props <----- */}
      {/* <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne',
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent',
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana',
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* <RendomNumber value={10} isPositive /> */}

      {/* ----> 21 - Template Literals and Exclude */}
      {/* <Toast position='center' /> */}

      {/* <CustomButton variant='primary' onClick={() => console.log('Clicked')}> 
          primary Button
        </CustomButton> */}



{/* // ->  24 - Polymorphic Components */}

      <Text as='h1' size='lg'>
        Heading
      </Text>
      <Text as='p' size='md'>
        Paragraph
      </Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>
        Label
      </Text>
    </div>
  )
}

export default App;
