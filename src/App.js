import { Container, Segment } from 'semantic-ui-react';
import './App.css';
import { MainHeader } from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' type='h1' />
      <DisplayBalance size='small' color='default' label='Your Balance:' value='2550.53' />

      <Segment textAlign='center'>
        <DisplayBalances income='1111.00' expenses='543.6' />
      </Segment>

      <MainHeader title='History' type='h3' />

      <EntryLine title='Gift' value='50.00' />
      <EntryLine title='Waste' value='100.00' isExpense />
      <EntryLine title='Work' value='150.00' />

      <MainHeader title='Add new' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
